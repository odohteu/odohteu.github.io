const makeGraph = () =>
  d3.csv("../csv/UNODC/EuropeUNODC.csv", { mode: "same-origin" })
    .then(async (results) => {
      const duration = 250;
      const n = 12;

      const names = new Set(results.map((d) => d.Country));

      const margin = { top: 16, right: 6, bottom: 6, left: 0 };
      const barSize = 48;
      const height = margin.top + barSize * n + margin.bottom;
      const width = 598;

      const x = d3.scaleLinear([0, 1], [margin.left, width - margin.right]);

      const y = d3
        .scaleBand()
        .domain(d3.range(n + 1).map((n) => n.toString()))
        .rangeRound([margin.top, margin.top + barSize * (n + 1 + 0.1)])
        .padding(0.1);

      if (document.getElementById("chart")) {
        const chart = document.getElementById("chart");
        chart.remove();
      }

      const svg = d3
        .select("div")
        .append("svg")
        .attr("id", "chart")
        .attr("viewBox", `0 0 1900 1900`);

      const smt = d3.rollup(
        results,
        ([d]) => d.Value,
        (d) => +d.Year,
        // (d) => d["Victims citizens"],
        (d) => d.Country
      );

      console.log(smt);

      const datevalues = Array.from(smt)
        .sort((a, b) => a[0] - b[0])
        .map(([year, results]) => [year, results]);

      const rank = (value) => {
        const results = Array.from(names, (name) => ({
          name,
          value: value(name),
        }));
        results.sort((a, b) => d3.descending(a.value, b.value));
        for (let i = 0; i < results.length; ++i)
          results[i].rank = Math.min(n, i);
        return results;
      };

      const k = 10;
      const keyframes = () => {
        const keyframes = [];
        let ka, a, kb, b;
        for ([[ka, a], [kb, b]] of d3.pairs(datevalues)) {
          for (let i = 0; i < k; ++i) {
            const t = i / k;
            keyframes.push([
              ka,
              rank(
                (name) => (a.get(name) || 0) * (1 - t) + (b.get(name) || 0) * t
              ),
            ]);
          }
        }
        keyframes.push([kb, rank((name) => b.get(name) || 0)]);
        return keyframes;
      };

      const frames = keyframes();

      const nameframes = d3.groups(
        frames.flatMap(([, results]) => results),
        (d) => d.name
      );
      const prev = new Map(
        nameframes.flatMap(([, results]) => d3.pairs(results, (a, b) => [b, a]))
      );

      const next = new Map(
        nameframes.flatMap(([, results]) => d3.pairs(results))
      );

      const color = () => {
        const scale = d3.scaleOrdinal(d3.schemeTableau10);
        if (results.some((d) => d.category !== undefined)) {
          const categoryByName = new Map(
            results.map((d) => [d.Country, d.Year])
          );
          scale.domain(categoryByName.values());
          return (d) => scale(categoryByName.get(d.name));
        }
        return (d) => scale(d.name);
      };

      const bars = (svg) => {
        let bar = svg.append("g").attr("fill-opacity", 0.6).selectAll("rect");

        return ([date, results], transition) =>
          (bar = bar
            .data(results.slice(0, n), (d) => d.name)
            .join(
              (enter) =>
                enter
                  .append("rect")
                  .attr("fill", color())
                  .attr("height", y.bandwidth())
                  .attr("x", x(0))
                  .attr("y", (d) => y((prev.get(d) || d).rank))
                  .attr("width", (d) => x((prev.get(d) || d).value) - x(0)),
              (update) => update,
              (exit) =>
                exit
                  .transition(transition)
                  .remove()
                  .attr("y", (d) => y((next.get(d) || d).rank))
                  .attr("width", (d) => x((next.get(d) || d).value) - x(0))
            )
            .call((bar) =>
              bar
                .transition(transition)
                .attr("y", (d) => y(d.rank))
                .attr("width", (d) => x(d.value) - x(0) + 50)
            ));
      };

      const labels = (svg) => {
        let label = svg
          .append("g")
          .style("font", "bold '25px var('sans-serif')")
          .style("font-variant-numeric", "tabular-nums")
          .attr("text-anchor", "start")
          .selectAll("text");

        return ([date, results], transition) =>
          (label = label
            .data(results.slice(0, n), (d) => d.name)
            .join(
              (enter) =>
                enter
                  .append("text")
                  .attr(
                    "transform",
                    (d) =>
                      `translate(${x((prev.get(d) || d).value)},${y(
                        (prev.get(d) || d).rank
                      )})`
                  )
                  .attr("y", y.bandwidth() / 2)
                  .attr("x", -6)
                  .attr("dy", "-0.25em")
                  .text((d) => d.name)
                  .call((text) =>
                    text
                      .append("tspan")
                      .attr("fill-opacity", 0.9)
                      .attr("font-weight", "normal")
                      .attr("x", -2)
                      .attr("dy", "1.15em")
                  ),
              (update) => update,
              (exit) =>
                exit
                  .transition(transition)
                  .remove()
                  .attr(
                    "transform",
                    (d) =>
                      `translate(${x((next.get(d) || d).value)},${y(
                        (next.get(d) || d).rank
                      )})`
                  )
                  .call((g) =>
                    g
                      .select("tspan")
                      .tween("text", (d) =>
                        textTween(d.value, (next.get(d) || d).value)
                      )
                  )
            )
            .call((bar) =>
              bar
                .transition(transition)
                .attr(
                  "transform",
                  (d) => `translate(${x(d.value)},${y(d.rank)})`
                )
                .call((g) =>
                  g
                    .select("tspan")
                    .tween("text", (d) =>
                      textTween((prev.get(d) || d).value, d.value)
                    )
                )
            ));
      };

      const formatNumber = d3.format(",d");

      function textTween(a, b) {
        const i = d3.interpolateNumber(a, b);
        return function (t) {
          this.textContent = formatNumber(i(t));
        };
      }

      const axis = (svg) => {
        const g = svg
          .append("g")
          .attr("transform", `translate(0,${margin.top})`);

        const axis = d3
          .axisTop(x)
          .ticks(width / 160)
          .tickSizeOuter(0)
          .tickSizeInner(-barSize * (n + y.padding()));

        return (_, transition) => {
          g.transition(transition).call(axis);
          g.select(".tick:first-of-type text").remove();
          g.selectAll(".tick:not(:first-of-type) line").attr("stroke", "white");
          g.select(".domain").remove();
        };
      };

      const formatDate = d3.utcFormat("%Y");

      const ticker = (svg) => {
        const now = svg
          .append("text")
          .style("font", `bold ${barSize}px var(--sans-serif)`)
          .style("font-variant-numeric", "tabular-nums")
          .attr("text-anchor", "end")
          .attr("x", width - 6)
          .attr("y", margin.top + barSize * (n - 0.45))
          .attr("dy", "0.32em")
          .text(frames[0][0]);

        return ([date], transition) => {
          transition.end().then(() => now.text(date));
        };
      };

      const updateBars = bars(svg);
      const updateAxis = axis(svg);
      const updateLabels = labels(svg);
      const updateTicker = ticker(svg);

      svg.node();

      for (const keyframe of frames) {
        const transition = svg
          .transition()
          .duration(duration)
          .ease(d3.easeLinear);

        // Extract the top bar’s value.
        x.domain([0, keyframe[1][0].value]);

        updateAxis(keyframe, transition);
        updateBars(keyframe, transition);
        updateLabels(keyframe, transition);
        updateTicker(keyframe, transition);

        await transition.end();
      }
    });

makeGraph();

const replay = () => makeGraph();

import React, { Component } from "react";

import Chart from "chart.js";

export default class Graph extends Component {
  private canvas: HTMLCanvasElement;
  private myChart: Chart;

  constructor(props: any) {
    super(props);
    this.createChart = this.createChart.bind(this);
    this.handleRefCanvas = this.handleRefCanvas.bind(this);
    this.getSalesGraphChartData = this.getSalesGraphChartData.bind(this);
    this.getSalesGraphChartOptions = this.getSalesGraphChartOptions.bind(this);
    //fim dos bind
    this.canvas = document.createElement("canvas");
    this.myChart = new Chart(this.canvas, {});
  }

  componentDidMount() {
    this.myChart = this.createChart(this.canvas);
  }

  createChart(canvas: HTMLCanvasElement): Chart {
    return new Chart(canvas, {
      type: "line",
      data: this.getSalesGraphChartData(),
      options: this.getSalesGraphChartOptions(),
    });
  }

  handleRefCanvas(r: HTMLCanvasElement) {
    this.canvas = r;
  }

  getSalesGraphChartData() {
    return {
      labels: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ],
      datasets: [
        {
          label: "R$ ",
          fill: false,
          borderWidth: 2,
          lineTension: 0,
          spanGaps: true,
          borderColor: "#efefef",
          pointRadius: 3,
          pointHoverRadius: 7,
          pointColor: "#efefef",
          pointBackgroundColor: "#efefef",
          data: [2666, 2778, 4912, 3767, 6810, 5670, 4820, 15073, 10687, 8432],
        },
      ],
    };
  }

  getSalesGraphChartOptions() {
    return {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontColor: "#efefef",
            },
            gridLines: {
              display: false,
              color: "#efefef",
              drawBorder: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              stepSize: 5000,
              fontColor: "#efefef",
            },
            gridLines: {
              display: true,
              color: "#efefef",
              drawBorder: false,
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="card bg-gradient-info">
        <div className="card-header border-0">
          <h3 className="card-title">
            <i className="fas fa-chart-line mr-2"></i>
            Historico de Entradas 2020
          </h3>

          <div className="card-tools">
            {/* <button
              type="button"
              className="btn bg-info btn-sm"
              data-card-widget="collapse"
            >
              <i className="fas fa-minus"></i>
            </button>
            <button
              type="button"
              className="btn bg-info btn-sm"
              data-card-widget="remove"
            >
              <i className="fas fa-times"></i>
            </button> */}
          </div>
        </div>
        <div className="card-body">
          <canvas
            className="chart"
            id="line-chart"
            ref={this.handleRefCanvas}
            style={{
              minHeight: "250px",
              height: "250px",
              maxHeight: "250px",
              maxWidth: "100%",
            }}
          ></canvas>
        </div>

        <div className="card-footer bg-transparent">
          <div className="row">
            <div className="col-4 text-center">
              <input
                type="text"
                className="knob"
                data-readonly="true"
                value={"70%"}
                onChange={(e: any) => {}}
                data-width="60"
                data-height="60"
              />

              <div className="text-white">Ganhou</div>
            </div>

            <div className="col-4 text-center">
              <input
                type="text"
                className="knob"
                data-readonly="true"
                value="15%"
                onChange={(e: any) => {}}
                data-width="60"
                data-height="60"
              />

              <div className="text-white">Em Aberto</div>
            </div>

            <div className="col-4 text-center">
              <input
                type="text"
                className="knob"
                data-readonly="true"
                value="30%"
                onChange={(e: any) => {}}
                data-width="60"
                data-height="60"
              />

              <div className="text-white">Perdeu</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

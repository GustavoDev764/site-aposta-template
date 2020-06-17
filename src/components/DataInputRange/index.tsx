import React, { Component } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface StateProps {}
interface DispatchProps {}
interface OwnProps {
  startDate: Date;
  endDate: Date;
  setStartDate: Function;
  setEndDate: Function;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class DataInputRange extends Component<Props> {
  render() {
    const { setStartDate, setEndDate, startDate, endDate } = this.props;

    return (
      <div className="form-group">
        <div className="d-flex flex-row bd-highlight mb-3">
          <div className="pl-2 pr-2 bd-highlight">
            <div className="form-group">
              <label>Data Inicio</label>
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                selectsStart
                className="form-control"
                startDate={startDate}
                endDate={endDate}
              />
            </div>
          </div>
          <div className="pl-2 pr-2 bd-highlight">
            <div className="form-group">
              <label>Data Termino</label>
              <DatePicker
                selected={endDate}
                onChange={(date: Date) => setEndDate(date)}
                selectsEnd
                className="form-control"
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

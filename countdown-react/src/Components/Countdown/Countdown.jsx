import React, { Component } from "react";
import "./Countdown.css";

class Countdown extends Component {
  constructor(props) {
    super(props);

    // Establecer la fecha de finalización (puedes cambiar esta fecha según tus necesidades)
    this.targetDate = new Date("2024-01-01T00:00:00");

    // Inicializar el estado con el tiempo restante
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    // Actualizar el tiempo restante cada segundo
    this.interval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  componentWillUnmount() {
    // Limpiar el intervalo cuando el componente se desmonta
    clearInterval(this.interval);
  }

  updateTime() {
    // Calcular el tiempo restante
    const now = new Date();
    const timeDifference = this.targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Actualizar el estado
    this.setState({
      days,
      hours,
      minutes,
      seconds,
    });

    // Comprobar si el tiempo ha llegado a cero
    if (timeDifference <= 0) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className="countdown">
        <div>
          <span>{days}d</span> <p>days</p>
        </div>
        <div className="line"></div>
        <div>
          <span>{hours}h</span>
          <p>hours</p>
        </div>
        <div className="line"></div>
        <div>
          <span>{minutes}min</span>
          <p>minutes</p>
        </div>
        <div className="line"></div>
        <div>
          <span>{seconds}sec</span>
          <p>seconds</p>
        </div>
      </div>
    );
  }
}

export default Countdown;

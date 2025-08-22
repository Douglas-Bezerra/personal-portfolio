import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./App.css";



function Skills() {
    const grafico = useRef(null); // referência para o canvas
    const chartInstance = useRef(null); // referência para destruir o gráfico antigo

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy(); // evita criar gráficos duplicados
        }

        const ctx = grafico.current.getContext("2d");

        chartInstance.current = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["React", "Node.js", "JavaScript", "CSS", "HTML", "MongoDB"],
                datasets: [
                    {
                        label: "Skills Level",
                        data: [6, 4, 3, 8, 8, 5],
                        borderWidth: 1,
                        backgroundColor: [
                            "rgb(97, 218, 251)", // React
                            "rgb(117, 173, 99)", // Node.js
                            "rgb(247, 224, 24)", // JavaScript
                            "rgb(33, 76, 229)", // CSS
                            "rgb(229, 76, 33)", // HTML
                            "rgb(0, 237, 100)", // MongoDB
                        ],
                    },
                ],
            },
            options: {
                indexAxis: "y", // Garante gráfico horizontal
                scales: {
                    x: {
                        ticks: {
                            color: "white",
                        },
                        min: 0,   // início da escala
                        max: 10   // limite superior da escala
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            display: false,
                        },
                    },
                },
            },
        });
    }, []);



    return (
        <section id="skills">
            <h1>Skills</h1>
            <div>
                <canvas ref={grafico}></canvas>
            </div>
        </section>
    );
}

export default Skills;

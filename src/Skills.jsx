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
                labels: ["React", "Node.js", "JavaScript", "CSS", "HTML", "MongoDB", "MySQL"],
                datasets: [
                    {
                        label: "Skills Level",
                        data: [6, 4, 3, 8, 8, 5, 5],
                        borderWidth: 1,
                        backgroundColor: [
                            "rgb(97, 218, 251)", // React
                            "rgb(117, 173, 99)", // Node.js
                            "rgb(247, 224, 24)", // JavaScript
                            "rgb(33, 76, 229)",  // CSS
                            "rgb(229, 76, 33)",  // HTML
                            "rgb(0, 237, 100)",  // MongoDB
                            "rgb(1, 91, 133)",   // MySQL
                        ],
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false, // Esta linha oculta a legenda "Skills Level"
                    }
                },
                indexAxis: "y", // Garante gráfico horizontal
                scales: {
                    x: {
                        ticks: {
                            color: "white",
                        },
                        min: 0,
                        max: 10,
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'white',
                            font: {
                                size: 20,
                            }
                        },
                    },
                }
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


import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const option = {
  responsive: true,
  plugins: {
    legend: { position: "chartArea" },
    title: {
      display: true,
      text: "Modular Bar Chart",
    },
  },
};

/**
 * const options = {
    plugins: {
      legend: {
        display: true
      }
    },
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 10,
        bottom: 5
      },
      margin: {
        left: 5,
        right: 5,
        top: 5,
        bottom: 5
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        border: { dash: [6, 6], display: true },
        grid: {
          display: true // Display grid lines for the y-axis
        },
        ticks: {
          padding: 15
        }
      },
      x: {
        beginAtZero: true,
        border: { display: true },
        grid: {
          display: false // Display grid lines for the y-axis
        },
        ticks: {
          padding: 7
        }
      }
    },
    elements: {
      bar: {
        borderRadius: 40,
        borderWidth: 0.7
      }
    }
  };
 */
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [{
    label: "Product A",
    data: [20, 30, 40, 50, 60, 70],
    backgroundColor: "green",
  },
  {
    label: 'Product B',
    data: [15, 20, 25, 40, 45, 60],
    backgroundColor: 'blue'
  },
  ],
};


export default function App() {
  return (
    <div className="App">
      <Bar options={option} data={data} />
    </div>
  );
}
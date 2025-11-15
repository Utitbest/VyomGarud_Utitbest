export default function Highlights() {
  const list = [
    "Engineered for extreme reliability and precision.",
    "Advanced autonomous flight and mission planning.",
    "Secure, cloud-connected telemetry and control systems.",
  ];

  return (
    <div className="bg-[#111111] text-white py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Why Choose VyomGarud?</h2>

      <div className="space-y-4 text-lg text-gray-300">
        {list.map((item, i) => (
          <p key={i}>• {item}</p>
        ))}
      </div>
    </div>
  );
}

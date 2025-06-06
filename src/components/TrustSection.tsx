
const stats = [
  {
    number: "15,234",
    label: "Richieste di progetti",
    icon: "📋"
  },
  {
    number: "8,567",
    label: "Preventivi realizzati",
    icon: "📊"
  },
  {
    number: "6,189",
    label: "Progetti completati",
    icon: "✅"
  }
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Affidati a Noi dall'Inizio alla Fine
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Migliaia di proprietari di casa si sono già affidati a noi per i loro progetti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

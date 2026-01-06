import React from "react";
import { motion } from "framer-motion";

// Vérifiez les noms exacts de vos fichiers dans le dossier assets
// Voici des noms plus génériques - ajustez-les selon vos vrais fichiers

// Option 1 : Si vous avez ces fichiers, utilisez leurs vrais noms
// import LogoMinistere from "@/assets/ministere-construction.png";
// import LogoNotaire from "@/assets/notaire.png";
// import LogoBanque from "@/assets/banque-partenaire.png";
// import LogoCertification from "@/assets/certification-acd.png";

// Option 2 : Si vous n'avez pas les logos, utilisez des icônes à la place
import { Building2, Shield, Users, Award } from "lucide-react";

const Confiance = () => {
  const partenaires = [
    {
      name: "Ministère de la Construction",
      description: "Partenaire officiel",
      // logo: LogoMinistere, // Décommentez si vous avez le logo
      icon: Building2,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      name: "Notaires Associés CI",
      description: "Sécurité juridique garantie",
      // logo: LogoNotaire, // Décommentez si vous avez le logo
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      name: "Banques Partenaires",
      description: "Solutions de financement",
      // logo: LogoBanque, // Décommentez si vous avez le logo
      icon: Users,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      name: "Certification ACD",
      description: "Garantie officielle",
      // logo: LogoCertification, // Décommentez si vous avez le logo
      icon: Award,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <div>
      <section
        id="confiance"
        className="py-24 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold tracking-wider text-sm uppercase">
              PARTENAIRES & CERTIFICATIONS
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">
              Ils nous font confiance
            </h3>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>

            <p className="mt-8 text-slate-600 font-light text-lg max-w-2xl mx-auto leading-relaxed">
              Notre expertise est reconnue et certifiée par les plus grandes
              institutions du secteur immobilier.
            </p>
          </div>

          {/* Partenaires */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partenaires.map((partenaire, index) => (
              <motion.div
                key={partenaire.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300 hover:-translate-y-2 h-full">
                  {/* Si vous avez des logos */}
                  {/* {partenaire.logo ? (
                    <div className="mb-6 h-16 flex items-center justify-center">
                      <img
                        src={partenaire.logo}
                        alt={partenaire.name}
                        className="max-h-full w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ) : ( */}
                  <div
                    className={`w-20 h-20 ${partenaire.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <partenaire.icon
                      className={`w-10 h-10 ${partenaire.color}`}
                    />
                  </div>
                  {/* )} */}

                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    {partenaire.name}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {partenaire.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center justify-center gap-3 bg-red-50 rounded-full px-8 py-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-700 font-medium">
                Plus de 150 clients satisfaits depuis 2014
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Confiance;

import React from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Award,
  Briefcase,
  Globe,
  Users,
  Target,
  Heart,
} from "lucide-react";
import PDG from "@/assets/PDGH.png";

const Equipe = () => {
  const equipeMembers = [
    {
      id: 1,
      name: "Assemien Hurricane",
      role: "Président Directeur Général",
      description:
        "Fondateur de Hurricane Services CI avec plus de 5 ans d'expérience dans l'immobilier et les services commerciaux en Côte d'Ivoire.",
      image: PDG,
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "jeanpaul@hurricane-services-ci.com",
      },
      stats: [
        { value: "5+", label: "Années expérience" },
        { value: "50+", label: "Projets réalisés" },
        { value: "50+", label: "Clients satisfaits" },
      ],
      expertise: [
        "Immobilier",
        "Investissement",
        "Stratégie",
        "Management",
        "Promotion evenementielle",
      ],
    },
    {
      id: 2,
      name: "Marie Koné",
      role: "Directrice Commerciale",
      description:
        "Spécialiste en marketing et développement commercial avec 10 ans d'expérience dans le secteur immobilier.",
      image:
        "data:image/png;base64,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",
      social: {
        linkedin: "https://linkedin.com",
        email: "marie@hurricane-services-ci.com",
      },
    },
    {
      id: 3,
      name: "Koffi Yao",
      role: "Responsable Juridique",
      description:
        "Expert en droit foncier et immobilier, garant de la sécurité juridique de tous nos projets.",
      image:
        "data:image/png;base64,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",

      social: {
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 4,
      name: "Amina Traoré",
      role: "Chef de Projets",
      description:
        "Ingénieure en BTP avec 8 ans d'expérience dans la gestion et supervision de projets immobiliers.",
      image:
        "data:image/png;base64,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",

      social: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
  ];

  const valeurs = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet réalisé.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Passionnés par la création de valeur pour nos clients.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Travail d'équipe et partenariats durables.",
    },
    {
      icon: Award,
      title: "Intégrité",
      description: "Transparence et éthique dans toutes nos actions.",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="pb-10 bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom">
        {/* En-tête */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-red-600 font-bold tracking-wider text-sm uppercase">
            NOTRE ÉQUIPE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">
            Rencontrez notre équipe d'experts
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-12"></div>

          <p className="text-slate-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Derrière chaque projet réussi se trouve une équipe passionnée et
            expérimentée. Découvrez les professionnels qui font la force de
            Hurricane Services CI.
          </p>
        </motion.div>

        {/* PDG en vedette */}
        <div className="mb-24">
          <motion.div
            className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-3">
              {/* Photo PDG */}
              <div className="lg:col-span-1 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent z-10"></div>
                <img
                  src={equipeMembers[0].image}
                  alt={equipeMembers[0].name}
                  className="w-full h-[500px] object-cover"
                />

                {/* Badge PDG */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      PDG & FONDATEUR
                    </div>
                  </div>
                </div>
              </div>

              {/* Informations PDG */}
              <div className="lg:col-span-2 p-8 md:p-12">
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                    {equipeMembers[0].name}
                  </h3>
                  <p className="text-red-600 text-lg font-medium mb-4">
                    {equipeMembers[0].role}
                  </p>
                  <div className="w-16 h-1 bg-red-500 mb-6"></div>
                </div>

                <p className="text-slate-700 text-lg leading-relaxed mb-8">
                  {equipeMembers[0].description}
                </p>

                {/* Statistiques */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {equipeMembers[0].stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-slate-600 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Expertise */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">
                    Domaines d'expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {equipeMembers[0].expertise.map((item, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium border border-red-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">
                    Contact & Réseaux
                  </h4>
                  <div className="flex gap-4">
                    {equipeMembers[0].social.linkedin && (
                      <a
                        href={equipeMembers[0].social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-slate-100 hover:bg-red-100 rounded-full flex items-center justify-center text-slate-700 hover:text-red-600 transition-all duration-300"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    )}
                    {equipeMembers[0].social.twitter && (
                      <a
                        href={equipeMembers[0].social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-slate-100 hover:bg-red-100 rounded-full flex items-center justify-center text-slate-700 hover:text-red-600 transition-all duration-300"
                      >
                        <Twitter className="w-6 h-6" />
                      </a>
                    )}
                    {equipeMembers[0].social.email && (
                      <a
                        href={`mailto:${equipeMembers[0].social.email}`}
                        className="w-12 h-12 bg-slate-100 hover:bg-red-100 rounded-full flex items-center justify-center text-slate-700 hover:text-red-600 transition-all duration-300"
                      >
                        <Mail className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reste de l'équipe */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Notre Équipe de Direction
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipeMembers.slice(1).map((member) => (
              <motion.div
                key={member.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                whileHover={{ y: -10 }}
              >
                {/* Photo */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-red-600 font-medium mb-4">{member.role}</p>

                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Réseaux sociaux */}
                  <div className="flex gap-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-slate-100 hover:bg-red-100 rounded-full flex items-center justify-center text-slate-700 hover:text-red-600 transition-all duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 bg-slate-100 hover:bg-red-100 rounded-full flex items-center justify-center text-slate-700 hover:text-red-600 transition-all duration-300"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-slate-100 hover:bg-red-100 rounded-full flex items-center justify-center text-slate-700 hover:text-red-600 transition-all duration-300"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nos valeurs */}
        <motion.div
          className="bg-gradient-to-r from-red-50 to-red-100 rounded-3xl p-12 border border-red-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Nos Valeurs Fondamentales
            </h3>
            <p className="text-slate-700 max-w-2xl mx-auto">
              Les principes qui guident chaque décision et chaque action de
              notre équipe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valeurs.map((valeur, index) => (
              <motion.div
                key={valeur.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <valeur.icon className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {valeur.title}
                </h4>
                <p className="text-slate-700">{valeur.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-6">
            Rejoignez notre équipe d'experts
          </h3>
          <p className="text-slate-700 max-w-2xl mx-auto mb-8">
            Vous souhaitez faire partie d'une équipe dynamique et innovante dans
            le secteur immobilier ?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg hover:from-red-500 hover:to-red-400 transition-all shadow-lg hover:shadow-xl">
              Postuler maintenant
            </button>
            <button className="px-10 py-4 bg-white border-2 border-red-600 text-red-600 font-bold rounded-lg hover:bg-red-50 transition-all">
              Voir nos offres d'emploi
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Equipe;

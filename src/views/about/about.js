import React, { useState, useEffect } from "react";
import {
  Building2,
  Target,
  TrendingUp,
  Shield,
  Users,
  Smartphone,
  Globe,
  Brain,
  ChevronRight,
  MapPin,
  Calendar,
  Award,
  Zap,
  Eye,
  Clock,
  BarChart3,
  Settings,
  UserCheck,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Footer from "../../components/footer/footer2";
import { useNavigate } from "react-router-dom";

const AboutUsPage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Market Scanning",
      description: "Continuous analysis of global market trends",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Automated Position Management",
      description: "Intelligent trade execution and optimization",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Adaptive Strategies",
      description: "Dynamic adjustment to bullish/bearish conditions",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "User-Friendly Interface",
      description: "Accessible to beginners yet powerful for experts",
      color: "from-orange-500 to-red-500",
    },
  ];

  const advantages = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Profitability",
      description:
        "Algorithmic trading strategies engineered for maximum returns",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Mitigation",
      description: "Real-time analysis prevents emotional decision-making",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Universal Accessibility",
      description: "Effective for novice to professional traders",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Seamless Automation",
      description: "Execute trades while you focus on life",
    },
  ];

  const roadmapItems = [
    {
      quarter: "Q1 2025",
      title: "Mobile Integration",
      description: "Launch of iOS/Android apps",
      icon: <Smartphone className="w-5 h-5" />,
      status: "upcoming",
    },
    {
      quarter: "Q2 2025",
      title: "Multi-Asset Expansion",
      description: "Cryptocurrency and commodity trading modules",
      icon: <BarChart3 className="w-5 h-5" />,
      status: "upcoming",
    },
    {
      quarter: "Q3 2025",
      title: "AI Enhancement",
      description: "Neural network upgrades for improved market forecasting",
      icon: <Brain className="w-5 h-5" />,
      status: "upcoming",
    },
    {
      quarter: "Q4 2025",
      title: "Global Compliance",
      description: "Regulatory adaptations for international markets",
      icon: <Globe className="w-5 h-5" />,
      status: "upcoming",
    },
  ];

  const techStack = [
    "Machine Learning for predictive analytics",
    "Real-time data processing engines",
    "Back-tested trading strategies",
    "Secure cloud-based infrastructure",
  ];

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>

          <div className="relative container mx-auto px-4 py-20">
            <div
              className={`text-center transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-4 py-2 border border-blue-500/30 mb-6 cursor-pointer"
                onClick={() => navigate("/")}
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-green-300">
                  Alpha Robotics LLP
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-800 via-green-400 to-pink-600 bg-clip-text text-transparent">
                About Us
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transforming Trading Through Intelligent Automation
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Incorporated July 16, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>LLPIN: ACI-3787</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>RoC-Ernakulam</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-4 py-2 border border-green-500/30">
                  <Building2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-green-300">
                    Who We Are
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-200">
                  Pioneering Fintech Innovation
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Alpha Robotics LLP is a pioneering fintech company
                  specializing in developing advanced automated trading
                  solutions that democratize financial markets for investors of
                  all experience levels.
                </p>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-200 mb-2">
                        Our Headquarters
                      </h3>
                      <p className="text-slate-300">
                        60/557 B4 First Floor, Asia S Complex
                        <br />
                        Calicut, Kerala - 673001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-200 mb-4">
                      Our Vision
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      To become India's leading provider of intelligent trading
                      solutions that empower individuals to achieve consistent
                      financial growth through cutting-edge technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alpha Trading Bot Section */}
        <div className="bg-slate-900/50 backdrop-blur-sm border-y border-slate-700/50">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full px-4 py-2 border border-purple-500/30 mb-6">
                  <Zap className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium text-purple-300">
                    Flagship Innovation
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-200 mb-4">
                  Alpha Trading Bot
                </h2>
                <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                  Our revolutionary trading platform combines sophisticated
                  algorithms with intuitive design
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="group relative">
                    <div
                      className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-lg"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${
                          feature.color.split(" ")[1]
                        }, ${feature.color.split(" ")[3]})`,
                      }}
                    ></div>
                    <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 text-white`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-slate-200 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Our Technology */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full px-4 py-2 border border-orange-500/30 mb-6">
                <Award className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium text-orange-300">
                  Why Choose Our Technology
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-200">
                Built for Success
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-slate-400">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="bg-slate-900/50 backdrop-blur-sm border-y border-slate-700/50">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-4 py-2 border border-green-500/30 mb-6">
                  <Users className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-green-300">
                    Leadership Team
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-200 mb-4">
                  Visionary Partners
                </h2>
                <p className="text-lg text-slate-300">
                  Our success is driven by experienced leaders
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-200 mb-2">
                      Mustafa Pandikasala
                    </h3>
                    <p className="text-blue-400 font-medium mb-4">
                      Designated Partner
                    </p>
                    <p className="text-slate-300">
                      Architect of our core trading algorithms
                    </p>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-200 mb-2">
                      Kongente Purakkal Noufal
                    </h3>
                    <p className="text-purple-400 font-medium mb-4">
                      Designated Partner
                    </p>
                    <p className="text-slate-300">
                      Financial markets strategist and technology innovator
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Excellence */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full px-4 py-2 border border-cyan-500/30">
                  <Brain className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-medium text-cyan-300">
                    Technical Excellence
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-200">
                  Powered by Advanced Technology
                </h2>
                <p className="text-lg text-slate-300">
                  The Alpha Trading Bot leverages cutting-edge technology for
                  superior performance
                </p>
              </div>

              <div className="space-y-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Future Roadmap */}
        <div className="bg-slate-900/50 backdrop-blur-sm border-y border-slate-700/50">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full px-4 py-2 border border-pink-500/30 mb-6">
                  <ArrowRight className="w-4 h-4 text-pink-400" />
                  <span className="text-sm font-medium text-pink-300">
                    Future Roadmap
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-200">
                  What's Coming Next
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {roadmapItems.map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center text-white">
                          {item.icon}
                        </div>
                        <span className="text-xs font-medium text-pink-400 bg-pink-500/20 px-2 py-1 rounded-full">
                          {item.quarter}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-200 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-12 border border-blue-800/30">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-6">
                Our Commitment
              </h2>
              <blockquote className="text-xl sm:text-2xl text-slate-300 italic leading-relaxed">
                "Democratizing sophisticated trading technology to help
                investors consistently achieve financial objectives without
                constant market monitoring."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Visit Us Section */}
        <div className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-4 py-2 border border-green-500/30 mb-6">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-green-300">
                  Visit Us
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-200 mb-6">
                Experience Our Solutions
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Visit our trading solutions at our Kozhikode development center
              </p>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 inline-block">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-slate-200 mb-2">
                      Asia S Complex
                    </h3>
                    <p className="text-slate-300">
                      Calicut, Kozhikode
                      <br />
                      Kerala, India - 673001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;

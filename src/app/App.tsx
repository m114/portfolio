import { motion } from 'motion/react';
import { 
  Database, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Briefcase, 
  GraduationCap, 
  Award,
  Code2,
  Server,
  Shield,
  Zap,
  CheckCircle,
  Globe,
  Clock
} from 'lucide-react';
import resumePdf from '../files/Mrunalini_Gurav_resume.pdf';
import profileImage from '../files/image.jpg';

export default function App() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Mrunalini_Gurav_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header/Hero */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <img src={profileImage} alt="Mrunalini Gurav" className="w-full h-full object-cover" />
            </div>
            
            <h1 className="text-5xl md:text-6xl mb-4">
              Mrunalini Gurav
            </h1>
            
            <p className="text-2xl md:text-3xl mb-6 text-blue-100">
              Oracle Database Administrator
            </p>
            
            <p className="text-lg md:text-xl mb-8 text-blue-50 max-w-3xl mx-auto">
              3+ Years of Experience in Banking Domain | Oracle 11g/12c/19c | RAC | Performance Tuning Expert
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Pune, Maharashtra</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:mrunalinigurav3@gmail.com" className="hover:underline">
                  mrunalinigurav3@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+919890260251" className="hover:underline">
                  +91 9890260251
                </a>
              </div>
            </div>
            
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
            >
              <Download className="w-5 h-5" />
              <span className="text-lg">Download Resume</span>
            </button>
          </motion.div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-12 md:h-20">
            <path
              fill="#f8fafc"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      </header>

      {/* Highlights */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl mb-2 text-blue-600">3+</h3>
              <p className="text-gray-600">Years Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl mb-2 text-green-600">OCI</h3>
              <p className="text-gray-600">Certified 2025</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                <Server className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl mb-2 text-purple-600">24/7</h3>
              <p className="text-gray-600">Database Support</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                <Database className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl mb-2 text-orange-600">RAC</h3>
              <p className="text-gray-600">3-Node Cluster</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6 text-center text-gray-800">Professional Summary</h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              Skilled Oracle Database Administrator with 3+ years of experience in the banking domain. 
              Seeking to reach the pinnacle of my career in the IT industry through the ever-challenging software world. 
              Committed to establishing myself as a disciplined and trusted professional, making significant contributions 
              both as a team member and as an individual.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6 text-center text-gray-800">Core Competencies</h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-12"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl text-gray-800">Database Technologies</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Oracle Database Management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  SQL & PL/SQL
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  RMAN (Backup & Recovery)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Real Application Cluster (RAC)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  ASM (Automatic Storage Management)
                </li>
              </ul>
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl text-gray-800">Tools & Platforms</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Oracle Enterprise Manager (OEM)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  ServiceNow
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  SSMS
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Data Guard
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  GoldenGate
                </li>
              </ul>
            </motion.div>

            {/* Professional Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-green-600" />
                <h3 className="text-xl text-gray-800">Professional Skills</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Change Management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Incident Management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Leadership & Team Collaboration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Problem-Solving
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Technical Communication
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6 text-center text-gray-800">Professional Experience</h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-12"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-10 rounded-2xl shadow-xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-gray-800">Associate Consultant (Oracle DBA)</h3>
                <p className="text-lg text-blue-700 mb-1">ATOS Global and IT Solution Pvt. Ltd.</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Pune, Maharashtra
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Oct 2021 - Present
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Banking Domain</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-gray-700 ml-0 md:ml-18">
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p>3+ years managing Oracle Database architecture, installation, configuration, and maintenance</p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p>Created and maintained database user accounts, roles, and permissions</p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p>Managed tablespace, user profiles, indexes, and storage parameters</p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p>Monitored performance and executed routine maintenance for optimal operation</p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p>24/7 on-call rotation for database support and incident resolution</p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p>Generated AWR, ADDM, ASH reports for SQL performance tuning</p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p>Expert in Oracle Database versions 11g, 12c, and 19c</p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p>Managed and monitored 3-node Oracle RAC cluster</p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p>Experience with RMAN and Data Guard activities</p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p>Knowledge of GoldenGate replication</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6 text-center text-gray-800">Education</h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-12"></div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-1 text-gray-800">Bachelor of Engineering - Computer Science</h3>
                  <p className="text-blue-600 mb-2">SVPM College of Engineering, Malegaon (BK), Baramati</p>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span>2017 - 2021</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                      First Class with Distinction
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-1 text-gray-800">Higher Secondary Certificate (HSC)</h3>
                  <p className="text-purple-600 mb-2">Vidhya Pratishthan Arts, Science and Commerce College, Baramati</p>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span>2015 - 2017</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                      First Class
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-1 text-gray-800">Secondary School Certificate (SSC)</h3>
                  <p className="text-green-600 mb-2">Shri Chhatrapati Highschool, Nimbodi, Maharashtra</p>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span>2015</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                      First Class with Distinction
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6 text-center text-gray-800">Certifications</h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-12"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-xl max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-gray-800">Oracle Cloud Infrastructure 2025</h3>
                <p className="text-xl text-orange-600 mb-1">Certified Foundation Associate</p>
                <p className="text-sm text-gray-600">Oracle Corporation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Fields of Interest */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl text-gray-800">Fields of Interest</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-lg text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  Database Management
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  Cloud Computing
                </li>
              </ul>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl text-gray-800">Languages</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-lg text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                  English
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                  Marathi
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                  Hindi
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6">Let's Connect</h2>
            <p className="text-xl mb-10 text-blue-50">
              Looking for an experienced Oracle DBA? I'm open to new opportunities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <a
                href="mailto:mrunalinigurav3@gmail.com"
                className="flex items-center gap-3 px-8 py-4 bg-white text-blue-700 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
              
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-3 px-8 py-4 bg-white/10 text-white border-2 border-white rounded-full hover:bg-white/20 transition-all transform hover:scale-105 backdrop-blur-sm"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <a href="tel:+919890260251" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                <Phone className="w-4 h-4" />
                +91 9890260251
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Pune, Maharashtra
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-gray-400 text-center">
        <p>© 2026 Mrunalini Gurav. All rights reserved.</p>
        <p className="text-sm mt-2">Oracle Database Administrator | Banking Domain Expert</p>
      </footer>
    </div>
  );
}

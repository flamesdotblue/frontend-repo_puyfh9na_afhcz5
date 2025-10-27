import React from 'react';
import { Code2, Database, BarChart2, Cpu, Cloud, Wrench } from 'lucide-react';

function SkillGroup({ title, items, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 p-2">
          <Icon className="h-5 w-5 text-indigo-600" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((i) => (
          <span
            key={i}
            className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Technical Skills & Credentials</h2>
        <p className="mt-1 text-slate-600">
          A balanced stack across data, modeling, deployment, and product.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillGroup
            title="Programming Languages"
            icon={Code2}
            items={[
              'Python',
              'SQL',
              'TypeScript',
            ]}
          />
          <SkillGroup
            title="Data Wrangling / Analysis"
            icon={Database}
            items={[
              'Pandas',
              'Polars',
              'PySpark',
              'dbt',
              'BigQuery',
            ]}
          />
          <SkillGroup
            title="ML / DL"
            icon={Cpu}
            items={[
              'scikit-learn',
              'TensorFlow',
              'PyTorch',
              'Hugging Face',
              'LightGBM',
              'XGBoost',
            ]}
          />
          <SkillGroup
            title="Visualization"
            icon={BarChart2}
            items={[
              'Matplotlib',
              'Seaborn',
              'Plotly',
              'Altair',
              'Tableau',
            ]}
          />
          <SkillGroup
            title="MLOps & Cloud"
            icon={Cloud}
            items={[
              'FastAPI',
              'Docker',
              'Kubernetes',
              'MLflow',
              'Airflow',
              'Weights & Biases',
              'Triton Inference Server',
              'Supabase',
            ]}
          />
          <SkillGroup
            title="Tools"
            icon={Wrench}
            items={[
              'Git',
              'LangChain',
              'Redis',
              'FAISS',
              'Kafka',
              'Postman',
            ]}
          />
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">Research, Writing, and Publications</h3>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
              <li>
                Blog: From ETL to LLM – Evaluating RAG Systems in Production
                <span className="ml-2 text-slate-400">(Medium)</span>
              </li>
              <li>
                Kaggle: Session-based Recs – Transformer vs. GRU4Rec Benchmark
                <span className="ml-2 text-slate-400">(Notebook)</span>
              </li>
              <li>
                Preprint: Quantization-aware Training for On-device Vision Models
                <span className="ml-2 text-slate-400">(arXiv)</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">Achievements & Certifications</h3>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
              <li>AWS Certified Machine Learning – Specialty</li>
              <li>Google Cloud Professional Data Engineer</li>
              <li>Coursera: DeepLearning.AI GenAI Specialization</li>
              <li>Kaggle: 2x Silver, 1x Bronze</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">Soft Skills & Team Impact</h3>
          <p className="mt-2 text-slate-700">
            I partner closely with design, product, and engineering to define metrics, ship ML features, and iterate based on user feedback. Known for clear communication, crisp documentation, and bias-to-action experiments that derisk decisions.
          </p>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
            <li>Led a cross-functional initiative to reduce churn; aligned stakeholders on success metrics and phased rollout.</li>
            <li>Mentored 5+ junior data scientists; introduced modeling review checklists and experiment tracking hygiene.</li>
            <li>Ran brown-bag sessions on LLM safety, evaluation, and prompt engineering patterns.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

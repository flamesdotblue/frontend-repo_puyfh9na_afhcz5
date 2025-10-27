import React, { useMemo, useState } from 'react';
import { Brain, Image as ImageIcon, MessageSquare, BarChart3, Sparkles, Filter } from 'lucide-react';

const PROJECTS = [
  {
    id: 'nlp-rag-support',
    title: 'RAG Customer Support Copilot',
    domain: 'GenAI',
    icon: Sparkles,
    problem:
      'Support agents struggled to find consistent answers across 80k+ knowledge base articles, leading to long handle times and low CSAT.',
    approach:
      'Built a retrieval-augmented generation pipeline: chunked docs (semantic) with embeddings, hybrid search (BM25 + vector), context re-ranking, and a constrained output schema. Added prompt-guardrails and human feedback loops.',
    tools: 'Python, LangChain, FAISS, OpenAI API, FastAPI, Weights & Biases, Supabase',
    results:
      'Reduced average handle time by 32%, increased first-contact resolution by 18%, and boosted CSAT by 12 points. Hallucination rate < 2% measured via eval harness.',
    learnings:
      'Hybrid retrieval + re-ranking outperformed pure vector search on long policy docs. Tight schemas + few-shot exemplars improved factuality and consistency.',
    metrics: [
      { label: 'AHT', value: '-32%' },
      { label: 'FCR', value: '+18%' },
      { label: 'CSAT', value: '+12' },
      { label: 'Hallucinations', value: '<2%' },
    ],
  },
  {
    id: 'nlp-intent-ner',
    title: 'Multilingual Intent + NER for Fintech',
    domain: 'NLP',
    icon: MessageSquare,
    problem:
      'Incoming chat messages in 6 languages needed accurate intent detection and entity extraction to automate triage and routing.',
    approach:
      'Curated 1.2M messages. Used sentencepiece tokenization, stratified sampling, and class-weighted loss. Fine-tuned XLM-RoBERTa for intent; spaCy transformer for NER with custom entity ruler. Deployed as a low-latency gRPC microservice.',
    tools: 'PyTorch, Hugging Face, spaCy, Triton Inference Server, Kafka, Docker',
    results:
      'Macro F1 0.92 on intents, NER F1 0.89. Automated routing for 64% of tickets, reducing median response time by 41%.',
    learnings:
      'Domain-adaptive pretraining on unlabeled chat logs lifted F1 by ~3 points. Careful label taxonomy design reduced confusion errors.',
    metrics: [
      { label: 'Intent F1', value: '0.92' },
      { label: 'NER F1', value: '0.89' },
      { label: 'Auto-routing', value: '64%' },
      { label: 'Response time', value: '-41%' },
    ],
  },
  {
    id: 'cv-quality',
    title: 'Vision-based Quality Inspection',
    domain: 'Computer Vision',
    icon: ImageIcon,
    problem:
      'Manufacturing line needed real-time defect detection at 30 FPS with <50 ms latency.',
    approach:
      'Collected 300k images via synthetic augmentation. Used YOLOv8 for object detection, followed by a lightweight MobileNetV3 classifier. Quantized to INT8 and deployed on edge Jetson devices.',
    tools: 'PyTorch, Ultralytics YOLOv8, TensorRT, OpenCV, NVIDIA Jetson',
    results:
      'mAP@50 of 0.96, false negative rate < 1.5%. Saved ~$1.2M annually from reduced scrap and rework.',
    learnings:
      'On-device quantization + tiling preserved accuracy while meeting latency. Synthetic data with domain randomization covered rare defect modes.',
    metrics: [
      { label: 'mAP@50', value: '0.96' },
      { label: 'Latency', value: '<50ms' },
      { label: 'FN rate', value: '<1.5%' },
      { label: 'Savings', value: '$1.2M/yr' },
    ],
  },
  {
    id: 'forecasting-churn',
    title: 'Churn Prediction & Uplift Modeling',
    domain: 'Predictive Analytics',
    icon: BarChart3,
    problem:
      'Subscription churn hovered at 9.8%/qtr with spray-and-pray discounts eroding margins.',
    approach:
      'Built feature store with events and payments. Trained gradient boosting model for churn risk; added two-model uplift to optimize retention offers. AB tested targeted campaigns.',
    tools: 'Python, LightGBM, scikit-learn, dbt, BigQuery, Airflow, MLflow',
    results:
      'AUC 0.87; retention campaign ROI +28%. Reduced discount spend by 35% while improving saves by 14%.',
    learnings:
      'Uplift segmentation prevented over-incentivization. Feature drift monitoring caught seasonality shifts early.',
    metrics: [
      { label: 'AUC', value: '0.87' },
      { label: 'ROI', value: '+28%' },
      { label: 'Discount spend', value: '-35%' },
      { label: 'Saves', value: '+14%' },
    ],
  },
  {
    id: 'reco-implicit',
    title: 'Personalized Recommendations',
    domain: 'Recommendation',
    icon: Brain,
    problem:
      'Low product discovery and short sessions hurt LTV in a marketplace with sparse feedback.',
    approach:
      'Implicit matrix factorization with ALS + item2vec for cold-start. Added session-based transformer re-ranker. Online bandit exploration (epsilon-greedy).',
    tools: 'PySpark, implicit, TensorFlow Recommenders, Redis, FastAPI, Kubernetes',
    results:
      '+11.6% CTR, +7.4% conversion in 4-week AB test; +9% AOV.',
    learnings:
      'Short-term intent modeling via session transformers beat static profiles. Store-side embeddings improved cross-sell.',
    metrics: [
      { label: 'CTR', value: '+11.6%' },
      { label: 'Conversion', value: '+7.4%' },
      { label: 'AOV', value: '+9%' },
    ],
  },
];

const FILTERS = ['All', 'GenAI', 'NLP', 'Computer Vision', 'Predictive Analytics', 'Recommendation'];

function MetricPill({ label, value }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-sm text-slate-700">
      <span className="font-medium text-slate-900">{value}</span>
      <span className="text-slate-500">{label}</span>
    </div>
  );
}

function ProjectCard({ p }) {
  const Icon = p.icon;
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 p-2">
          <Icon className="h-5 w-5 text-indigo-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
          <p className="text-sm text-slate-500">{p.domain}</p>
        </div>
      </div>

      <div className="mt-4 space-y-3 text-slate-700">
        <p><span className="font-semibold text-slate-900">Problem:</span> {p.problem}</p>
        <p><span className="font-semibold text-slate-900">Approach:</span> {p.approach}</p>
        <p><span className="font-semibold text-slate-900">Tools:</span> {p.tools}</p>
        <details className="mt-2">
          <summary className="cursor-pointer text-slate-900 font-medium">Results & Impact</summary>
          <p className="mt-2 text-slate-700">{p.results}</p>
        </details>
        <details>
          <summary className="cursor-pointer text-slate-900 font-medium">Key Learnings</summary>
          <p className="mt-2 text-slate-700">{p.learnings}</p>
        </details>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.metrics.map((m) => (
          <MetricPill key={m.label} label={m.label} value={m.value} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState('All');
  const filtered = useMemo(() => {
    if (active === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.domain === active);
  }, [active]);

  return (
    <section id="projects" className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Flagship Projects</h2>
            <p className="mt-1 text-slate-600">Impactful case studies across NLP, Vision, Predictive Analytics, Recommenders, and GenAI.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-slate-600">
            <Filter className="h-4 w-4" />
            <span className="text-sm">Filter by domain</span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                active === f
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>

        <div className="mt-10 text-sm text-slate-500">
          Tip: Click “Results & Impact” or “Key Learnings” in each card to expand details.
        </div>
      </div>
    </section>
  );
}

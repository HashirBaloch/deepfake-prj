import CodeBlock from '@/common/components/code-block';

export default function CodePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 gap-8">
      <h1 className="text-5xl">
        Watch the<span className="text-warning"> code</span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl text-center">
        This project is open source. Explore the backend (FastAPI, TensorFlow, MongoDB) and frontend (Next.js, NextUI, Chart.js) code below. <br />
        <a className="text-warning underline" href="https://github.com/HashirBaloch/deepfake-prj" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </p>
      <CodeBlock />
      <div className="w-full max-w-2xl mt-8">
        <h2 className="text-2xl font-bold mb-2">Backend Example (FastAPI):</h2>
        <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 text-sm overflow-x-auto">
{`@app.post("/detect")
async def detect_deepfake(file: UploadFile = File(...)):
    # ...image processing and prediction...
    return result`}
        </pre>
        <h2 className="text-2xl font-bold mt-6 mb-2">Frontend Example (React):</h2>
        <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 text-sm overflow-x-auto">
{`fetch('/api/detect', { method: 'POST', body: formData })
  .then(res => res.json())
  .then(data => setResult(data));`}
        </pre>
      </div>
    </main>
  );
}

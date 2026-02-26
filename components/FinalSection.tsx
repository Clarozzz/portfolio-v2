export default function FinalSection() {
  return (
    <div className="animate-fadeIn p-4 mb-12 mt-10 rounded-3xl drop-shadow-md">

      <div className="bg-linear-to-br from-white to-slate-100 border border-blue-600 p-10 rounded-3xl space-y-10">

        <div className="space-y-4">
          <h2 className="text-5xl font-bold">
            How I Work
          </h2>
          <p className="text-slate-600 max-w-2xl">
            I focus on building scalable, maintainable systems with a DevOps-first mindset.
            My goal is to create solutions that are not only functional, but reliable and efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="">
            <h3 className="font-semibold mb-2">Engineering Principles</h3>
            <ul className="space-y-2 text-slate-600">
              <li>• Clean and maintainable architecture</li>
              <li>• Automation over manual processes</li>
              <li>• Performance and scalability first</li>
              <li>• Security by design</li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-semibold mb-2">Open to Opportunities</h3>
            <ul className="space-y-2 text-slate-600">
              <li>• Development roles</li>
              <li>• DevOps Engineering positions</li>
              <li>• Freelance technical projects</li>
              <li>• Startup collaborations</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
}
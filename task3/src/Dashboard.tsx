import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const worker = new Worker(new URL("./worker.ts", import.meta.url));

    worker.onmessage = (e) => {
      setD(e.data);
      setIsLoading(false);
      worker.terminate();
    };

    worker.postMessage("start");

    return () => {
      worker.terminate();
    };
  }, []);

  return <div>{isLoading ? "Calculating..." : d}</div>;
}

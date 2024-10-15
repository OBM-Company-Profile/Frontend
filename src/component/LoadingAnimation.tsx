import { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";

function LoadingAnimation() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <RingLoader loading={loading} size={50} color="#8181CB" />
    </div>
  );
}

export default LoadingAnimation;

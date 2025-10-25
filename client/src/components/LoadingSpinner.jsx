function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center my-6">
      <div className="w-6 h-6 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
      <span className="ml-3 text-indigo-300">Generating response...</span>
    </div>
  );
}

export default LoadingSpinner;

import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-white text-slate-900 text-center font-sans">
          <div className="max-w-md p-8 rounded-3xl bg-[#fcfaf6] border border-slate-200 shadow-xl">
            <h2 className="text-2xl font-bold font-display mb-2">Something went wrong</h2>
            <p className="text-sm text-slate-600 mb-6">
              We encountered a minor issue loading this view. Click below to reload.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 rounded-full bg-slate-950 text-white font-semibold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-md"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

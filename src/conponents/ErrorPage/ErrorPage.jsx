import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {

    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
                <div className="text-center px-6 py-10 max-w-lg bg-white shadow-lg rounded-lg">
                    <h1 className="text-6xl font-bold text-red-400 mb-6">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page Not Found</h2>
                    <p className="text-gray-500 mb-8">
                        Oops! The page you’re looking for doesn’t exist. It might have been moved or deleted.
                    </p>
                    <button
                        onClick={handleBackToHome}
                        className="btn"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
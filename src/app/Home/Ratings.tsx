import React from 'react';

interface Item {
    Ratings: string;
    Reviews: string;
    starIcon?: React.ReactNode;
    icons?: React.ReactNode;
}

interface RatingsProps {
    className?: string;
}

const Ratings: React.FC<RatingsProps> = () => {
    const items: Item[] = [
        {
            Ratings: '4.8',
            Reviews: 'Google Ratings',
            starIcon: (
                <svg width="20" height="20" viewBox="0 0 31 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.7574 18.7908C24.3626 19.1898 24.1814 19.7669 24.2712 20.3328L25.6259 28.1544C25.7402 28.8174 25.4721 29.4882 24.9402 29.8714C24.4191 30.2686 23.7258 30.3163 23.1573 29.9985L16.4084 26.3262C16.1737 26.1957 15.9131 26.1258 15.6465 26.118H15.2335C15.0903 26.1402 14.9501 26.1878 14.8221 26.2611L8.07161 29.9508C7.7379 30.1256 7.36 30.1876 6.98971 30.1256C6.08761 29.9477 5.48571 29.0511 5.63353 28.1051L6.98971 20.2835C7.07961 19.7128 6.89829 19.1326 6.50361 18.7272L1.00115 13.1631C0.540954 12.6973 0.380954 11.9978 0.591239 11.3667C0.795431 10.7371 1.31657 10.2777 1.94591 10.1744L9.51925 9.02815C10.0952 8.96615 10.6011 8.60052 10.8602 8.06L14.1973 0.922052C14.2766 0.763077 14.3787 0.616821 14.5021 0.492821L14.6392 0.381538C14.7109 0.298871 14.7931 0.230513 14.8846 0.174872L15.0507 0.111282L15.3097 0H15.9512C16.5242 0.062 17.0286 0.419692 17.2922 0.953846L20.6735 8.06C20.9173 8.57985 21.3912 8.94071 21.9383 9.02815L29.5117 10.1744C30.1517 10.2698 30.6865 10.7308 30.8984 11.3667C31.0979 12.0042 30.9258 12.7036 30.4563 13.1631L24.7574 18.7908Z" fill="#FFCB4C" />
                </svg>
            )
        },
        {
            Ratings: '15+',
            Reviews: 'Mou Signed',
            icons: ''
        },
        {
            Ratings: '100+',
            Reviews: 'Outreach Programs',
            icons: ''
        }
    ];

    return (
        <>
            {/* Desktop View */}
            <div className="hidden md:grid grid-cols-3 gap-6 px-4 py-8 w-full max-w-4xl mx-auto">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center"
                    >
                        <div className="flex items-center gap-2 text-4xl font-bold text-blue-600">
                            <span>{item.Ratings}</span>
                            {item.starIcon}
                        </div>
                        <p className="mt-2 text-gray-600 text-sm">{item.Reviews}</p>
                    </div>
                ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden w-full max-w-md mx-auto px-4 py-10">
                <h1 className="text-xl font-semibold text-center mb-6 text-blue-800">Our Achievements</h1>
                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center"
                        >
                            <div className="flex flex-col items-start">
                                <span className="text-2xl font-bold text-blue-600 flex items-center gap-1">
                                    {item.Ratings} {item.starIcon}
                                </span>
                                <p className="text-gray-600 text-sm">{item.Reviews}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Ratings;

import React from 'react'

const OtherDetails = () => {
    return (
        <div className="flex flex-col justify-center w-[1220px]">
            <div className="flex flex-col height-[250px] text-white items-start">
                <p className="text-[20px] font-bold py-4">Other Details</p>
                 <div className="bg-highlight w-full p-4">
                    <div className="flex flex-col items-start bg-highlight text-dimWhite space-y-1">
                        <div className="flex flex-row space-x-6">
                            <p>
                            Languages
                            </p>
                            <div className="flex flex-col items-start text-gray-200">
                                <p>
                                    English
                                </p>
                                <p>
                                    French
                                </p>
                                <p>
                                    German
                                </p>
                                <p>
                                    Italian
                                </p>
                                <p>
                                    Spanish
                                </p>
                                <p>
                                    Portuguese
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row flex flex-row space-x-6">
                            <p>
                                Release date
                            </p>
                            <p className="text-gray-200">
                                February 8, 2024
                            </p>
                        </div>
                        <div className="flex flex-row flex flex-row space-x-6">
                            <p>
                                Publisher
                            </p>
                            <p className="text-gray-200">
                                PlayStation PC LLC
                            </p>
                        </div>
                        <div className="flex flex-row flex flex-row space-x-6">
                            <p>
                                Developers
                            </p>
                            <p className="text-gray-200">
                                Arrowhead Game Studios
                            </p>
                        </div>
                        <div className="flex flex-row flex flex-row space-x-6">
                            <p>
                                Works on
                            </p>
                            <p className="text-gray-200">
                                Windows
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherDetails

import React from 'react'

const SystemRequirements = () => {
    return (
        <div className="flex flex-col justify-center w-[1220px]">
            <div className="flex flex-col height-[250px] text-white items-start">
                <p className="text-[20px] font-bold py-4">System requirements</p>
                <div className="flex flex-row items-center w-full h-[50px] bg-primary">
                    <div className="bg-highlight h-full text-center text-[20px] font-bold p-4">WINDOWS</div>
                 </div>
                 <div className="bg-highlight w-full p-4">
                    <p className="text-[20px] font-bold py-6">
                        Minimum system requirements
                    </p>
                    <div className="flex flex-col items-start bg-highlight text-dimWhite space-y-1">
                        <div className="flex flex-row space-x-6">
                            <p>
                                System requirements
                            </p>
                            <p className="text-gray-200">
                                Windows Vista / Windows 7
                            </p>
                        </div>
                        <div className="flex flex-row flex flex-row space-x-6">
                            <p>
                                Processor
                            </p>
                            <p className="text-gray-200">
                                2.4GHz Dual Core
                            </p>
                        </div>
                        <div className="flex flex-row flex flex-row space-x-6">
                            <p>
                                Memory
                            </p>
                            <p className="text-gray-200">
                                4 GB RAM
                            </p>
                        </div>
                        <div className="flex flex-row flex flex-row space-x-6">
                            <p>
                                Graphics
                            </p>
                            <p className="text-gray-200">
                                512 MB NVIDIA GeForce 9800 / ATI Radeon HD 2600 XT
                            </p>
                        </div>
                        <div className="flex flex-row flex flex-row space-x-6">
                            <p>
                                DirectX
                            </p>
                            <p className="text-gray-200">
                                10
                            </p>
                        </div>
                        <div className="flex flex-row flex flex-row space-x-6">
                            <p>
                                Storage
                            </p>
                            <p className="text-gray-200">
                                7 GB
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SystemRequirements

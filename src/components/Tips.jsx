import { PawPrint } from 'lucide-react';
import React from 'react';

const Tips = () => {
    return (
        <div className='bg-[#edf3fd]'>
            <div className='max-container fredoka'>
                <div className='max-w-[950px] mx-auto'>
                    <h1 className='title text-[#0b347b]'>Winter Care Tips For Pets</h1>
                    <div className='flex flex-col md:flex-row mx-3 gap-3 md:gap-8'>
                        <div className='flex-1'>
                            <div className='tips'>
                                <div>
                                    <PawPrint className='fill-gray-800 text-gray-800 ' />
                                </div>
                                <div>
                                    <h1>Indoor care and shelter:
                                    </h1>
                                    <p className=''>If pets must be outdoors, ensure they have a warm, dry,
                                        and draft-free shelter raised off the ground, with plenty of insulation like straw.
                                    </p>
                                </div>
                            </div>
                            <div className='tips'>
                                <div>
                                    <PawPrint className='fill-gray-800 text-gray-800 ' />
                                </div>
                                <div>
                                    <h1>Keep pets inside:
                                    </h1>
                                    <p className=''>
                                        Animals should be kept indoors, especially in very cold weather.
                                         Check outdoor water bowls frequently to ensure the water hasn't frozen. Use heated bowls or bring warm water to them.  </p>
                                </div>
                            </div>
                            <div className='tips'>
                                <div>
                                    <PawPrint className='fill-gray-800 text-gray-800 ' />
                                </div>
                                <div className='content-end-safe'>
                                    <h1>Outdoor precautions</h1>
                                    <p className='text-justify leading-relaxed'> Before going outside, apply a paw balm or petroleum jelly to protect  paws from salt and chemicals. Wipe their paws with a damp  cloth after walks to remove any residue,
                                        and check for cracks or redness.
                                        Avoid shaving your pet down to the skin in winter. A longer coat provides more insulation.  </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className='tips'>
                                <div>
                                    <PawPrint className='fill-gray-800 text-gray-800 ' />
                                </div>
                                <div>
                                    <h1>Stay hydrated: </h1>
                                    <p className=''> Ensure your pet has access to fresh, unfrozen water, especially if they are active outdoors. </p>
                                </div>
                            </div>
                            <div className='tips'>
                                <div>
                                    <PawPrint className='fill-gray-800 text-gray-800 ' />
                                </div>
                                <div>
                                    <h1>Adjust diet: </h1>
                                    <p className=''> Pets that spend time in the cold may need a diet with more protein and fat, while indoor pets with less exercise may need fewer calories. Consult your vet about supplements or dietary changes.  </p>
                                </div>
                            </div>
                            <div className='tips'>
                                <div>
                                    <PawPrint className='fill-gray-800 text-gray-800 ' />
                                </div>
                                <div>
                                    <h1>Potential hazards</h1>
                                    <p className=''> Before starting your car, tap on the hood to warn any cats that may be sheltering underneath seeking warmth.  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tips;
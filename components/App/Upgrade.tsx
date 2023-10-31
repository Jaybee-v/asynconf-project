import { DataSearch } from '@/models/data'
import React from 'react'
import { Label } from '../ui/label';

interface UpgradeProps{
    data: DataSearch
}

export const Upgrade: React.FC<UpgradeProps> = ({ data }) => {
    console.log("DATA",data);
    
  return (
    <section className='px-8 py-4 grid grid-cols-2 mx-auto'>
            {data.type.score > 6 || data.energy.score > 6 || data.year.score > 5 || data.mileage.score > 6 && (
            
            <div className='w-96 mx-auto'>
            <h2  className='py-2 -ms-4 font-semibold tracking-wide text-primary'>Les atouts de votre véhicule</h2>
            {data.type.score > 6 && (
                <div>
                    <Label>Type de véhicule</Label>
                    <p>{data.type.name}</p>
                </div>
            )}
            {data.energy.score > 6 && (
                <div>
                    <Label>Energie consommée</Label>
                    <p>{data.energy.label}</p>
                </div>
            )}
            {data.year.score > 5 && (
                <div>
                    <Label>Mise en circulation du véhicule</Label>
                    <p> {!data.year.max
                            ? "après " + data.year.min
                            : data.year.min + " - " + data.year.max}</p>
                </div>
            )}
            {data.mileage.score > 6 && (
                <div>
                    <Label>Kilometrage annuel estimé</Label>
                    <p> {data.mileage.min} - {data.mileage.max} 000
                        km / an</p>
                </div>
            )}
        </div>
             )} 
            {data.type.score < 6 || data.energy.score < 6 || data.year.score < 5 || data.mileage.score < 6 && (
                
                <div className='w-96 mx-auto'>
                <h2 className='py-2 -ms-4 font-semibold tracking-wide text-red-500'>Envisagez de changer ces points</h2>
            {data.type.score < 6 && (
                <div>
                    <Label className='text-red-500'>Type de véhicule</Label>
                    <p>{data.type.name}</p>
                </div>
            )}
            {data.energy.score < 6 && (
                <div>
                    <Label className='text-red-500'>Energie consommée</Label>
                    <p>{data.energy.label}</p>
                </div>
            )}
            {data.year.score < 5 && (
                <div>
                    <Label className='text-red-500'>Mise en circulation du véhicule</Label>
                    <p> {!data.year.max
                            ? "après " + data.year.min
                            : data.year.min + " - " + data.year.max}</p>
                </div>
            )}
            {data.mileage.score < 6 && (
                <div>
                    <Label className='text-red-500'>Kilometrage annuel estimé</Label>
                    <p> {data.mileage.min} - {data.mileage.max} 000
                        km / an</p>
                </div>
            )}
            {data.bonus > 0 && (
                <div>
                    <Label className='text-red-500'>Nombre de passagers</Label>
                    <p>Vous devriez penser à co-voiturer avec votre véhicule.</p>
                    </div>

            )}
        </div>
        )}
    </section>
  )
}

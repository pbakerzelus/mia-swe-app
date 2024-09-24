'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { PitchPlot, PitchPlotPitch } from '../../../components/ui/pitch-plot'


/**
 * 
 * If you would like to display the pitcher's image, you can use the image hosted at 
 * https://img.mlbstatic.com/mlb-photos/image/upload/v1/people/{pitcherId}/headshot/silo/current
 * 
 */
export default function Page({ params }: { params: { pitcherId: string } }) {

    const { pitcherId } = params

    return (
        <div className="">
            <Card>
                <CardHeader>
                    <CardTitle>
                        Pitcher id - {pitcherId}
                    </CardTitle>
                    <CardDescription>
                        Organization
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        age | stance | pos
                    </div>
                </CardContent>
            </Card>
            <PitchPlot
                className='w-64'
                pitches={[]}
            />
        </div>
    );


}

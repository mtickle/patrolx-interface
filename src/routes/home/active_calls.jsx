import Card from 'react-bootstrap/Card';
import { CallsMiniTable } from '../calls/mini_table';
import { CallsMiniMap } from '../calls/mini_map';

export const ActiveCalls = () => {
    return (
        <>
            <div className='row'>
                <div className="col-sm-4">
                    <CallsMiniMap />
                </div>

                <div className="col-sm-8">
                    <CallsMiniTable />
                </div>
          

            </div>

        </>
    );
};
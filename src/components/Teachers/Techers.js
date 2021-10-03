import React from 'react';
import Techer from '../Techer/Techer';

const Techers = () => {
    return (
        <div className="text-center py-3">
            <h4 className="text-danger">Our Teacher</h4>
            <h2 className="title my-3">Meet With Expert Teacher</h2>
            <p>Verbling is without a doubt the best one-on-one teaching resource when it comes to convenience.</p>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {/* add techers  */}
                <Techer name="David Calle" img="https://upload.wikimedia.org/wikipedia/commons/a/a1/David_calle_parrilla.jpg"></Techer>
                <Techer name="Ray Chambers" img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Ray_Chambers_2011_Shankbone.JPG/330px-Ray_Chambers_2011_Shankbone.JPG"></Techer>
                <Techer name="Marie-Christine Ghanbari Jahromi" img="https://www.globalteacherprize.org/media/2653/marie-christine-ghanbari-jahromi-headshot-2.png"></Techer>

            </div>
        </div>
    );
};

export default Techers;
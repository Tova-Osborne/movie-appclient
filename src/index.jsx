import {createRoot} from 'react-dom/client';

import "./index.scss"

const MyMovieApp = () => {
    return (
        <div className="my-movie">
            <div>Good Morning</div>
        </div>
    );
};

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<MyMovieApp/>);
import React from 'react';
import './imageLinkForm.styles.scss';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return(
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in the pictures.Give it a try!'}
            </p>
            <div className='center'>
                <div className='pa4 br3 shadow-5 center form'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button 
                        className='corrections w-30 grow f4 link ph3 pv dib white bg-light-purple' 
                        onClick={onSubmit}>
                            Detect
                    </button>
                </div>
            </div>
        </div>
    )
};
export default ImageLinkForm;
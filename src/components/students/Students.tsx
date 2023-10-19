import React from 'react'
import CommonCard from '../../common/CommonCard'
import './styles/Styles.scss';

function Students() {
  const featuresList = [{ featureName: 'Student Details', description: 'To access student related details' },
  { featureName: 'Add Old Student Data', description: 'To add old student details' },
  { featureName: 'Old Student Payment', description: 'setup old students payment mode' }, { featureName: 'Certificates', description: 'To access certificates and TC' }, { featureName: 'Transportation', description: 'To access Transport services details' }, { featureName: 'Inventory', description: 'To access inventory details of Uniforms,books and stationaries' }]
  return (
    <div className='p-3 main-container'>
      <h4>Features list</h4>
      <div className='m-5 d-flex flex-wrap justify-content-between'>
        {
          featuresList.map((feature: any) => {
            return <div className='card-container'>
              <p>{feature.featureName}</p>
              <label>
                {feature.description}
              </label>
              <div className='d-flex justify-content-center mt-3'>
                <button className='btn'>Go to</button>
              </div>
            </div>
          })
        }

      </div>
    </div>
  )
}

export default Students
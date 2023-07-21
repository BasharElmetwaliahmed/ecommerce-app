
function FeatureBox({featureIcon,featureHead,featureParagraph}) {
  return (
                <div className='feature-box'>
                <i className={featureIcon}></i>
                <div className='feature-txt'>
                    <h3>{featureHead}</h3>
                    <p>{featureParagraph}</p>
                </div>
            </div>
  )
}

export default FeatureBox
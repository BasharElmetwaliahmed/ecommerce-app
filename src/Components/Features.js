import FeatureBox from "./FeatureBox"
import './Features.css'

function Features() {
  return (
    <div className='features'>
        <div className='container'>
            <FeatureBox featureIcon='fa-solid fa-truck-fast' featureHead='Free Shipping' featureParagraph='Order above 1000$'/>
            <FeatureBox featureIcon='fa-solid fa-percent' featureHead='Member Discount' featureParagraph='On Every Order'/>
            <FeatureBox featureIcon='fa-solid fa-dollar-sign' featureHead={`Return & Refund`} featureParagraph='Money Back Gurantely'/>
            <FeatureBox featureIcon='fa-solid fa-headset' featureHead='Customer Support' featureParagraph='Every Time Call Support'/>


        </div>
    </div>
  )
}

export default Features
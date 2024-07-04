import React from 'react';
import './BuyerProductView.css';
import { Trophy, Flame, Flower2, Sparkle, GraduationCap, Briefcase } from 'lucide-react';
import { apiConnector } from "../../../utils/Apiconnecter";
import { authroutes } from "../../../apis/apis";

function BuyerProductView(props) {
    const handleProductRequest = async() => {
        const user = localStorage.getItem('campusrecycleuser');
        const userObj = JSON.parse(user);
        const buyerEmail = userObj.email;
        try {
            const api_header = { 
              Authorization: `Bearer ${localStorage.getItem('campusrecycletoken')}`,
              "Content-Type": "multipart/form-data"
            };
            const bodyData = {
                buyername: buyerEmail,
                selleremail: props.product.owner.email,
                productid: props.product._id
            }
            const response = await apiConnector("POST", authroutes.PRODUCT_REQUEST, bodyData, api_header);
            console.log(response.data);
            if (response.data.success) {
              alert("Product requested");
            }
          } catch (error) {
            console.log(error);
          }
    }
  return (
    <div className='buyer-product-view'>
        <div className='buyer-product-view-container'>
            <h3>{props.product && props.product.productname}</h3>
            <div className='buyer-product-view-container-product-image'>
                <div className='buyer-product-view-container-product-image-main'>
                    <img src={props.product && props.product.images[0]} alt="" />
                </div>
                <div className='buyer-product-view-container-product-image-secondary-first'>
                    <img src={props.product && props.product.images[1]} alt="" />
                    <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='buyer-product-view-container-product-image-secondary-second'>
                    <img className='img-1' src="https://images.unsplash.com/photo-1585147877975-6acd0a929a46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <img className='img-2' src="https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
            <div className='buyer-product-view-container-product-details'>
                <div className="buyer-product-view-container-product-details-info">
                    <div className="description">
                        {props.product && props.product.productdescription}
                    </div>
                    <div className="seller-account">
                        <div className="profile-picture">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                        </div>
                        <div className="profile-desc">
                            <h6>Selling from {props.product && props.product.owner.firstname} {props.product && props.product.owner.lastname}</h6>
                            <p>{props.product && props.product.owner.accounttype}</p>
                        </div>
                    </div>
                    <div className="product-perks">
                        <div className="icon">
                            <Trophy />
                        </div>
                        <div className="perk-info">
                            <h6>Witness the Opening Ceremony of the Olympic Games</h6>
                            <p>Be a part of history as the celebration passes on the iconic Seine River.</p>
                        </div>
                    </div>
                    <div className="product-perks">
                        <div className="icon">
                            <Flame />
                        </div>
                        <div className="perk-info">
                            <h6>Explore the private garden terrace</h6>
                            <p>View my Permanent Flame sculpture and the Olympic Torch of Paris 2024.</p>
                        </div>
                    </div>
                    <div className="product-perks">
                        <div className="icon">
                            <Flower2 />
                        </div>
                        <div className="perk-info">
                            <h6>Pluck and sip with our edible garden wall</h6>
                            <p>Pick an assortment of flowers to craft your own unique aperitif.</p>
                        </div>
                    </div>
                    <div className="product-perks">
                        <div className="icon">
                            <Sparkle />
                        </div>
                        <div className="perk-info">
                            <h6>Create your own memory orb!</h6>
                            <p>Design an orb to store your core memory – and then take it home with you!</p>
                        </div>
                    </div>
                    <div className="what-will-you-do">
                        <h6>What you’ll do</h6>
                        <p>Formerly a railway station in the heart of Paris, the Musée d’Orsay is now one of the finest museums in the world. And in anticipation of the Opening Ceremony of the Olympic Games, its 5th-floor terrace has been transformed under my creative direction, providing an atmosphere as unique as Paris itself. In fact, at the entrance of the terrace, you will discover a floor that evokes the calm flow of the Seine’s waters. I hope you enjoy the space as much as I enjoyed bringing it to life.</p>
                        <p>On top of the many features I’ve curated, the terrace will offer unparalleled views of the Ceremony, the Seine and the city. Soak it in. Paris is a masterpiece unto itself. </p>
                        <p>• Keep your eyes peeled as you enter the terrace. I’ve displayed this year’s Olympic torch, which I had the pleasure of designing, for you to see up close.</p>
                        <p>• Follow the Seine-inspired water-like flooring to the tasting bar, where you can experience the artistry of Margot Lecarpentier – once dubbed Paris’s “Most Influential Bartender”.</p>
                        <p>• Select any number of ingredients from our edible garden wall to craft fragrant, France-inspired refreshments. Santé!</p>
                        <p>• As Paris kicks off the Olympic Games, watch from high above as the Opening Ceremony floats by on the Seine. The sights and sounds are bound to enthral, inspire and uplift.</p>
                        <p>• Once the ceremony passes, the music can begin. Paris-based art collective 99GINGER will provide the soundtrack to a celebration of love, peace, unity and France itself.</p>
                    </div>
                    <div className="meet-your-seller">
                        <h5>Meet your seller</h5>
                        <div className="card">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                            <h5>{props.product && props.product.owner.firstname} {props.product && props.product.owner.lastname}</h5>
                            <p>{props.product && props.product.owner.accounttype}</p>
                        </div>
                        <div className="seller-about">
                            <div className="icon">
                                <GraduationCap />
                            </div>
                            <p>Education: 2nd Year, ECE</p>
                        </div>
                        <div className="seller-about">
                            <div className="icon">
                                <Briefcase />
                            </div>
                            <p>Position: President, E-Cell</p>
                        </div>
                        <p>Hello, I’m Mathieu Lehanneur, a French multidisciplinary designer. I create furniture, objects and spaces that blend design, art, nature and science. I believe in magic and wonder, and I always strive to imbue everything with the power to surprise us.</p>
                    </div>
                </div>
                <div className="buyer-product-view-container-product-details-request">
                    <div className="price-card">
                        <h5>
                            &#x20B9;{props.product && props.product.price} Per Product
                        </h5>
                        <p>{props.product && props.product.quantity} left - {props.product && props.product.status}</p>
                        <button className='btn' onClick={handleProductRequest}>
                            Request
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BuyerProductView
import React, {Component} from "react";
import"./GetProfile.css";

class GetProfile extends Component{
	constructor(props){
		super(props);
		this.state = {
			firstname:"",
			lastname:"",
			memberSince:"",
			accountEmail:"",
			postTotal:"",
			id:this.props.acc_id
		}
	}

	componentDidMount(){ //fetch data from the database
	const{id} = this.state;
	let acc_id= id;
    fetch(`https://limitless-brushlands-99611.herokuapp.com/profile/${acc_id}`)
    .then(response=>response.json())
    .then(data=> {
      this.setState(
      	{firstname:data.firstname,
      	 lastname:data.lastname,
      	 memberSince:data.joined,
      	 accountEmail:data.email,
      	 postTotal:data.entries
      	})
    })
  }

	render(){
		const{firstname, lastname, accountEmail, postTotal, memberSince} = this.state;
		const date_E = memberSince.slice(0,10);
	
		return(
			<section className="center">
				<h2 className="header_title">Account Information</h2>
				<div className="display_section">
					<p>Name: <span className="info_E"> {firstname} {lastname}</span></p>
					<p>Login email: <span className="info_E"> {accountEmail}</span></p>
					<p>Your total post: <span className="info_E"> {postTotal}</span></p>
					<p>Member since: <span className="info_E">{date_E}</span></p>
				</div>

			</section>
		)
	}
}

export default GetProfile;
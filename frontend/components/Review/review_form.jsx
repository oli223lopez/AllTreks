import React from 'react'




class ReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            description: this.props.review.description,
            rating: this.props.review.rating,
            user_id: this.props.review.user_id
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }
    componentDidMount(){
        this.props.showHikeThunk(this.props.hikeName)
    }

    update(field){
        // console.log(this.state)
        return (e) => this.setState({[field]: e.currentTarget.value})
    }
    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state, {hikes_id: this.props.hikeDB.id});
        this.props.processForm(review);
    }
    
    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className="reviewError" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    render(){
        // console.log(this.props.review)
        if(!this.isEmpty(this.props.hikeDB)){
            // console.log(this.props.review.hikes_id)
        return(
            <div className="reviewForm">
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.props.hikeDB.name.split("_").join(" ")}</h2>

                    <div className="reviewErrorsDiv">{this.renderErrors()}</div>
                    <label>
                        1<input type="radio" name='rating' value={1} selected={this.props.rating === 1 ? "selected" : ""} 
                        onChange={this.update('rating')}/> 
                        2<input type="radio" name='rating' value={2} selected={this.props.rating === 2 ? "selected" : ""} 
                        onChange={this.update('rating')}/>
                        3<input type="radio" name='rating' value={3} selected={this.props.rating === 3 ? "selected" : ""} 
                        onChange={this.update('rating')}/>
                        4<input type="radio" name='rating' value={4} selected={this.props.rating === 4 ? "selected" : ""} 
                        onChange={this.update('rating')}/>
                        5<input type="radio" name='rating' value={5} selected={this.props.rating === 5 ? "selected" : ""} 
                        onChange={this.update('rating')}/>  

                    </label>
                    <textarea placeholder="Share you thoughts about the trail so others know what to expect" 
                        value={this.props.description} onChange={this.update('description')}
                        className="descriptionReviewStuff"/>

                    <button type="submit" className="">Post</button>
                </form>
                
            </div>
        )
        }else{
            return(
                <div></div>
            )
        }
    }



}

export default ReviewForm


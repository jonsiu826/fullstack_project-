import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchProducts } from '../../actions/product_actions';

const mapStateToProps = (state) => {
    // debugger
    return {
        reviews: Object.values(state.entities.reviews)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex)
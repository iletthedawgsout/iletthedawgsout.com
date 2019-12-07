import React, { useCallback } from 'react';
import { RootState } from "../redux";
import { connect, useDispatch } from 'react-redux';
import { addTodo } from "../redux";

interface Props {
    onPress: () => any;
}

const Husky = (props: Props) => {
    const dispatch = useDispatch();
    const incrementCounter = useCallback(
        () => dispatch(addTodo("hello")),
        [dispatch]
    );

    return (<img onClick={incrementCounter} src={"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/04/25110707/Dubs-II-51-1024x576.jpg"}></img>);
};

const mapState = (state: RootState) => ({

})

const mapDispatch = {
    addTodo
}

const HuskyContainer = connect(
    mapState,
    mapDispatch
)(Husky);

export { HuskyContainer as Husky }
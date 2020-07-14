import React from 'react';
import Review from "../../components/review/Review";
import Screen from "../../components/screen/Screen";

export default () => {
    return (
        <Screen className={"reviews"}>
            <Review rating={5} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus velit..."} />
        </Screen>
    )
}

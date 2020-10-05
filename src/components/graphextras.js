const mouseOverHandler = (d, e) => {
    setState({
        showToolTip: true,
        top: `${e.screenY - 10}px`,
        left: `${e.screenX + 10}px`,
        y: d.y,
        x: d.x,
    });
};

const mouseMoveHandler = (e) => {
    if (state.showToolTip) {
        setState({ top: `${e.y - 10}px`, left: `${e.x + 10}px` });
    }
};

const mouseOutHandler = () => {
    setState({ showToolTip: false });
};

const createTooltip = () => {
    if (state.showToolTip) {
        return (
            <ToolTip top={this.state.top} left={this.state.left}>
                The x value is {this.state.x} and the y value is {this.state.y}
            </ToolTip>
        );
    }
    return false;
};

import PlotsConnectorInterface from "../interfaces/PlotsConnectorInterface";

class PlotsConnector extends PlotsConnectorInterface{
    constructor(userId) {
        super();
        this.userId = userId;
    }
}

export default PlotsConnector;

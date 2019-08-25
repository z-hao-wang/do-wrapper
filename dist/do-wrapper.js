"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_helper_1 = __importDefault(require("./request-helper"));
var account_1 = __importDefault(require("./modules/account"));
var cdn_1 = __importDefault(require("./modules/cdn"));
var certificates_1 = __importDefault(require("./modules/certificates"));
var databases_1 = __importDefault(require("./modules/databases"));
var domains_1 = __importDefault(require("./modules/domains"));
var droplets_1 = __importDefault(require("./modules/droplets"));
var firewalls_1 = __importDefault(require("./modules/firewalls"));
var floating_ip_1 = __importDefault(require("./modules/floating-ip"));
var images_1 = __importDefault(require("./modules/images"));
var kubernetes_1 = __importDefault(require("./modules/kubernetes"));
var load_balancers_1 = __importDefault(require("./modules/load-balancers"));
var projects_1 = __importDefault(require("./modules/projects"));
var regions_1 = __importDefault(require("./modules/regions"));
var sizes_1 = __importDefault(require("./modules/sizes"));
var snapshots_1 = __importDefault(require("./modules/snapshots"));
var tags_1 = __importDefault(require("./modules/tags"));
var volumes_1 = __importDefault(require("./modules/volumes"));
var DigitalOcean = /** @class */ (function () {
    function DigitalOcean(token, pageSize) {
        if (pageSize === void 0) { pageSize = 10; }
        this.pageSize = pageSize;
        var requestHelper = new request_helper_1.default(token);
        this.account = new account_1.default(requestHelper);
        this.cdn = new cdn_1.default(requestHelper);
        this.certificates = new certificates_1.default(requestHelper);
        this.databases = new databases_1.default(requestHelper);
        this.domains = new domains_1.default(requestHelper);
        this.droplets = new droplets_1.default(requestHelper);
        this.firewalls = new firewalls_1.default(requestHelper);
        this.floatingIPs = new floating_ip_1.default(requestHelper);
        this.images = new images_1.default(requestHelper);
        this.kubernetes = new kubernetes_1.default(requestHelper);
        this.loadBalancers = new load_balancers_1.default(requestHelper);
        this.projects = new projects_1.default(requestHelper);
        this.regions = new regions_1.default(requestHelper);
        this.sizes = new sizes_1.default(requestHelper);
        this.snapshots = new snapshots_1.default(requestHelper);
        this.tags = new tags_1.default(requestHelper);
        this.volumes = new volumes_1.default(requestHelper);
    }
    return DigitalOcean;
}());
exports.default = DigitalOcean;

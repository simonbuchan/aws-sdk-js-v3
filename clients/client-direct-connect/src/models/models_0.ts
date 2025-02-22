import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

import { DirectConnectServiceException as __BaseException } from "./DirectConnectServiceException";

/**
 * <p>Information about a route filter prefix that a customer can advertise through Border Gateway Protocol (BGP)
 *         over a public virtual interface.</p>
 */
export interface RouteFilterPrefix {
  /**
   * <p>The CIDR block for the advertised route. Separate multiple routes using commas. An IPv6 CIDR must use /64 or shorter.</p>
   */
  cidr?: string;
}

export namespace RouteFilterPrefix {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteFilterPrefix): any => ({
    ...obj,
  });
}

export interface AcceptDirectConnectGatewayAssociationProposalRequest {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId: string | undefined;

  /**
   * <p>The ID of the request proposal.</p>
   */
  proposalId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the virtual private gateway or transit gateway.</p>
   */
  associatedGatewayOwnerAccount: string | undefined;

  /**
   * <p>Overrides the Amazon VPC prefixes advertised to the Direct Connect gateway.</p>
   *          <p>For information about how to set the prefixes, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/multi-account-associate-vgw.html#allowed-prefixes">Allowed Prefixes</a> in the <i>Direct Connect User Guide</i>.</p>
   */
  overrideAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
}

export namespace AcceptDirectConnectGatewayAssociationProposalRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptDirectConnectGatewayAssociationProposalRequest): any => ({
    ...obj,
  });
}

export enum GatewayType {
  TransitGateway = "transitGateway",
  VirtualPrivateGateway = "virtualPrivateGateway",
}

/**
 * <p>Information about the associated gateway.</p>
 */
export interface AssociatedGateway {
  /**
   * <p>The ID of the associated gateway.</p>
   */
  id?: string;

  /**
   * <p>The type of associated gateway.</p>
   */
  type?: GatewayType | string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the associated virtual private gateway or transit gateway.</p>
   */
  ownerAccount?: string;

  /**
   * <p>The Region where the associated gateway is located.</p>
   */
  region?: string;
}

export namespace AssociatedGateway {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatedGateway): any => ({
    ...obj,
  });
}

export type DirectConnectGatewayAssociationState =
  | "associated"
  | "associating"
  | "disassociated"
  | "disassociating"
  | "updating";

/**
 * <p>Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.</p>
 */
export interface DirectConnectGatewayAssociation {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the associated gateway.</p>
   */
  directConnectGatewayOwnerAccount?: string;

  /**
   * <p>The state of the association. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>associating</code>: The initial state after calling <a>CreateDirectConnectGatewayAssociation</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>associated</code>: The Direct Connect gateway and virtual private gateway or transit gateway are successfully associated and ready to pass traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>disassociating</code>: The initial state after calling <a>DeleteDirectConnectGatewayAssociation</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>disassociated</code>: The virtual private gateway or transit gateway is disassociated from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual private gateway or transit gateway is stopped.</p>
   *             </li>
   *          </ul>
   */
  associationState?: DirectConnectGatewayAssociationState | string;

  /**
   * <p>The error message if the state of an object failed to advance.</p>
   */
  stateChangeError?: string;

  /**
   * <p>Information about the associated gateway.</p>
   */
  associatedGateway?: AssociatedGateway;

  /**
   * <p>The ID of the Direct Connect gateway association.</p>
   */
  associationId?: string;

  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   */
  allowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  /**
   * <p>The ID of the virtual private gateway. Applies only to private virtual interfaces.</p>
   */
  virtualGatewayId?: string;

  /**
   * @deprecated
   *
   * <p>The Amazon Web Services Region where the virtual private gateway is located.</p>
   */
  virtualGatewayRegion?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the virtual private gateway.</p>
   */
  virtualGatewayOwnerAccount?: string;
}

export namespace DirectConnectGatewayAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectConnectGatewayAssociation): any => ({
    ...obj,
  });
}

export interface AcceptDirectConnectGatewayAssociationProposalResult {
  /**
   * <p>Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.</p>
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}

export namespace AcceptDirectConnectGatewayAssociationProposalResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptDirectConnectGatewayAssociationProposalResult): any => ({
    ...obj,
  });
}

/**
 * <p>One or more parameters are not valid.</p>
 */
export class DirectConnectClientException extends __BaseException {
  readonly name: "DirectConnectClientException" = "DirectConnectClientException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectConnectClientException, __BaseException>) {
    super({
      name: "DirectConnectClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectConnectClientException.prototype);
  }
}

/**
 * <p>A server-side error occurred.</p>
 */
export class DirectConnectServerException extends __BaseException {
  readonly name: "DirectConnectServerException" = "DirectConnectServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectConnectServerException, __BaseException>) {
    super({
      name: "DirectConnectServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectConnectServerException.prototype);
  }
}

export enum AddressFamily {
  IPv4 = "ipv4",
  IPv6 = "ipv6",
}

/**
 * <p>The name and status of a customer agreement. </p>
 */
export interface CustomerAgreement {
  /**
   * <p>The name of the agreement.</p>
   */
  agreementName?: string;

  /**
   * <p>The status of the customer agreement. This will be either <code>signed</code> or <code>unsigned</code>
   *          </p>
   */
  status?: string;
}

export namespace CustomerAgreement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomerAgreement): any => ({
    ...obj,
  });
}

export interface AllocateConnectionOnInterconnectRequest {
  /**
   * <p>The bandwidth of the connection. The possible values are 50Mbps, 100Mbps, 200Mbps,
   *       300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, and 10Gbps. Note that only those Direct Connect Partners
   *       who have met specific requirements
   *     are allowed to create a 1Gbps, 2Gbps, 5Gbps or 10Gbps hosted connection.</p>
   */
  bandwidth: string | undefined;

  /**
   * <p>The name of the provisioned connection.</p>
   */
  connectionName: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account of the customer for whom the connection will be provisioned.</p>
   */
  ownerAccount: string | undefined;

  /**
   * <p>The ID of the interconnect on which the connection will be provisioned.</p>
   */
  interconnectId: string | undefined;

  /**
   * <p>The dedicated VLAN provisioned to the connection.</p>
   */
  vlan: number | undefined;
}

export namespace AllocateConnectionOnInterconnectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllocateConnectionOnInterconnectRequest): any => ({
    ...obj,
  });
}

export type ConnectionState =
  | "available"
  | "deleted"
  | "deleting"
  | "down"
  | "ordering"
  | "pending"
  | "rejected"
  | "requested"
  | "unknown";

export enum HasLogicalRedundancy {
  No = "no",
  Unknown = "unknown",
  Yes = "yes",
}

/**
 * <p>Information about the MAC Security (MACsec) secret key.</p>
 */
export interface MacSecKey {
  /**
   * <p>The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key.</p>
   */
  secretARN?: string;

  /**
   * <p>The Connection Key Name (CKN) for the MAC Security secret key.</p>
   */
  ckn?: string;

  /**
   * <p>The state of the MAC Security (MACsec) secret key.</p>
   *          <p>The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>associating</code>: The MAC Security (MACsec) secret key is being validated and not yet associated with the connection or LAG.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>associated</code>: The MAC Security (MACsec) secret key is validated and associated with the connection or LAG.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>disassociating</code>: The MAC Security (MACsec) secret key is being disassociated from the connection or LAG</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>disassociated</code>: The MAC Security (MACsec) secret key is no longer associated with the connection or LAG.</p>
   *             </li>
   *          </ul>
   */
  state?: string;

  /**
   * <p>The date that the MAC Security (MACsec) secret key takes effect. The value is displayed in UTC format.</p>
   */
  startOn?: string;
}

export namespace MacSecKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MacSecKey): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a tag.</p>
 */
export interface Tag {
  /**
   * <p>The key.</p>
   */
  key: string | undefined;

  /**
   * <p>The value.</p>
   */
  value?: string;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an Direct Connect connection.</p>
 */
export interface Connection {
  /**
   * <p>The ID of the Amazon Web Services account that owns the connection.</p>
   */
  ownerAccount?: string;

  /**
   * <p>The ID of the connection.</p>
   */
  connectionId?: string;

  /**
   * <p>The name of the connection.</p>
   */
  connectionName?: string;

  /**
   * <p>The state of the connection. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ordering</code>: The initial state of a hosted connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted connection confirms or declines the connection order.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requested</code>: The initial state of a standard connection. The connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The connection has been approved and is being initialized.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The network link is up and the connection is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: The network link is down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The connection is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The connection has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: A hosted connection in the <code>ordering</code> state enters the <code>rejected</code> state if it is deleted by the customer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the connection is not available.</p>
   *             </li>
   *          </ul>
   */
  connectionState?: ConnectionState | string;

  /**
   * <p>The Amazon Web Services Region where the connection is located.</p>
   */
  region?: string;

  /**
   * <p>The location of the connection.</p>
   */
  location?: string;

  /**
   * <p>The bandwidth of the connection.</p>
   */
  bandwidth?: string;

  /**
   * <p>The ID of the VLAN.</p>
   */
  vlan?: number;

  /**
   * <p>The name of the Direct Connect service provider associated with the connection.</p>
   */
  partnerName?: string;

  /**
   * <p>The time of the most recent call to <a>DescribeLoa</a> for this connection.</p>
   */
  loaIssueTime?: Date;

  /**
   * <p>The ID of the LAG.</p>
   */
  lagId?: string;

  /**
   * @deprecated
   *
   * <p>The Direct Connect endpoint on which the physical connection terminates.</p>
   */
  awsDevice?: string;

  /**
   * <p>Indicates whether jumbo frames (9001 MTU) are supported.</p>
   */
  jumboFrameCapable?: boolean;

  /**
   * <p>The Direct Connect endpoint that terminates the physical connection.</p>
   */
  awsDeviceV2?: string;

  /**
   * <p>The Direct Connect endpoint that terminates the logical connection. This device might be
   *       different than the device that terminates the physical connection.</p>
   */
  awsLogicalDeviceId?: string;

  /**
   * <p>Indicates whether the connection supports a secondary BGP peer in the same address family (IPv4/IPv6).</p>
   */
  hasLogicalRedundancy?: HasLogicalRedundancy | string;

  /**
   * <p>The tags associated with the connection.</p>
   */
  tags?: Tag[];

  /**
   * <p>The name of the service provider associated with the connection.</p>
   */
  providerName?: string;

  /**
   * <p>Indicates whether the connection supports MAC Security (MACsec).</p>
   */
  macSecCapable?: boolean;

  /**
   * <p>The MAC Security (MACsec) port link status of the connection.</p>
   *          <p>The valid values are <code>Encryption Up</code>, which means that there is an active Connection Key Name, or <code>Encryption Down</code>.</p>
   */
  portEncryptionStatus?: string;

  /**
   * <p>The MAC Security (MACsec) connection encryption mode.</p>
   *          <p>The valid values are <code>no_encrypt</code>, <code>should_encrypt</code>, and <code>must_encrypt</code>.</p>
   */
  encryptionMode?: string;

  /**
   * <p>The MAC Security (MACsec) security keys associated with the connection.</p>
   */
  macSecKeys?: MacSecKey[];
}

export namespace Connection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Connection): any => ({
    ...obj,
  });
}

export interface AllocateHostedConnectionRequest {
  /**
   * <p>The ID of the interconnect or LAG.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account ID of the customer for the connection.</p>
   */
  ownerAccount: string | undefined;

  /**
   * <p>The bandwidth of the connection. The possible values are 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, and 10Gbps. Note that only those Direct Connect Partners who have met specific requirements are allowed to create a 1Gbps, 2Gbps, 5Gbps or 10Gbps hosted connection. </p>
   */
  bandwidth: string | undefined;

  /**
   * <p>The name of the hosted connection.</p>
   */
  connectionName: string | undefined;

  /**
   * <p>The dedicated VLAN provisioned to the hosted connection.</p>
   */
  vlan: number | undefined;

  /**
   * <p>The tags associated with the connection.</p>
   */
  tags?: Tag[];
}

export namespace AllocateHostedConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllocateHostedConnectionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A tag key was specified more than once.</p>
 */
export class DuplicateTagKeysException extends __BaseException {
  readonly name: "DuplicateTagKeysException" = "DuplicateTagKeysException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateTagKeysException, __BaseException>) {
    super({
      name: "DuplicateTagKeysException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateTagKeysException.prototype);
  }
}

/**
 * <p>You have reached the limit on the number of tags that can be assigned.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}

/**
 * <p>Information about a private virtual interface to be provisioned on a connection.</p>
 */
export interface NewPrivateVirtualInterfaceAllocation {
  /**
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   */
  virtualInterfaceName: string | undefined;

  /**
   * <p>The ID of the VLAN.</p>
   */
  vlan: number | undefined;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn: number | undefined;

  /**
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.</p>
   */
  mtu?: number;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily | string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * <p>The tags associated with the private virtual interface.</p>
   */
  tags?: Tag[];
}

export namespace NewPrivateVirtualInterfaceAllocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NewPrivateVirtualInterfaceAllocation): any => ({
    ...obj,
  });
}

export interface AllocatePrivateVirtualInterfaceRequest {
  /**
   * <p>The ID of the connection on which the private virtual interface is provisioned.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the virtual private interface.</p>
   */
  ownerAccount: string | undefined;

  /**
   * <p>Information about the private virtual interface.</p>
   */
  newPrivateVirtualInterfaceAllocation: NewPrivateVirtualInterfaceAllocation | undefined;
}

export namespace AllocatePrivateVirtualInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllocatePrivateVirtualInterfaceRequest): any => ({
    ...obj,
  });
}

export enum BGPPeerState {
  Available = "available",
  Deleted = "deleted",
  Deleting = "deleting",
  Pending = "pending",
  Verifying = "verifying",
}

export enum BGPStatus {
  Down = "down",
  Unknown = "unknown",
  Up = "up",
}

/**
 * <p>Information about a BGP peer.</p>
 */
export interface BGPPeer {
  /**
   * <p>The ID of the BGP peer.</p>
   */
  bgpPeerId?: string;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   */
  asn?: number;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily | string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * <p>The state of the BGP peer. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>verifying</code>: The BGP peering addresses or ASN require validation before the BGP peer can be created. This state applies only to public virtual interfaces.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The BGP peer is created, and remains in this state until it is ready to be established.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The BGP peer is ready to be established.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>:  The BGP peer is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>:  The BGP peer is deleted and cannot be established.</p>
   *             </li>
   *          </ul>
   */
  bgpPeerState?: BGPPeerState | string;

  /**
   * <p>The status of the BGP peer. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>up</code>: The BGP peer is established. This state does not indicate the
   *         state of the routing function. Ensure that you are receiving routes over the BGP session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: The BGP peer is down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The BGP peer status is not available.</p>
   *             </li>
   *          </ul>
   */
  bgpStatus?: BGPStatus | string;

  /**
   * <p>The Direct Connect endpoint that terminates the BGP peer.</p>
   */
  awsDeviceV2?: string;

  /**
   * <p>The Direct Connect endpoint that terminates the logical connection. This device might be
   *       different than the device that terminates the physical connection.</p>
   */
  awsLogicalDeviceId?: string;
}

export namespace BGPPeer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BGPPeer): any => ({
    ...obj,
  });
}

export type VirtualInterfaceState =
  | "available"
  | "confirming"
  | "deleted"
  | "deleting"
  | "down"
  | "pending"
  | "rejected"
  | "unknown"
  | "verifying";

/**
 * <p>Information about a virtual interface.</p>
 */
export interface VirtualInterface {
  /**
   * <p>The ID of the Amazon Web Services account that owns the virtual interface.</p>
   */
  ownerAccount?: string;

  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;

  /**
   * <p>The location of the connection.</p>
   */
  location?: string;

  /**
   * <p>The ID of the connection.</p>
   */
  connectionId?: string;

  /**
   * <p>The type of virtual interface. The possible values are <code>private</code> and <code>public</code>.</p>
   */
  virtualInterfaceType?: string;

  /**
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   */
  virtualInterfaceName?: string;

  /**
   * <p>The ID of the VLAN.</p>
   */
  vlan?: number;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn?: number;

  /**
   * <p>The autonomous system number (ASN) for the Amazon side of the connection.</p>
   */
  amazonSideAsn?: number;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily | string;

  /**
   * <p>The state of the virtual interface. The following are the possible values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: A virtual interface that is able to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: A virtual interface that is BGP down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: A virtual interface that cannot forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the virtual interface is not available.</p>
   *             </li>
   *          </ul>
   */
  virtualInterfaceState?: VirtualInterfaceState | string;

  /**
   * <p>The customer router configuration.</p>
   */
  customerRouterConfig?: string;

  /**
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.</p>
   */
  mtu?: number;

  /**
   * <p>Indicates whether jumbo frames (9001 MTU) are supported.</p>
   */
  jumboFrameCapable?: boolean;

  /**
   * <p>The ID of the virtual private gateway. Applies only to private virtual interfaces.</p>
   */
  virtualGatewayId?: string;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The routes to be advertised to the Amazon Web Services network in this Region. Applies to public virtual interfaces.</p>
   */
  routeFilterPrefixes?: RouteFilterPrefix[];

  /**
   * <p>The BGP peers configured on this virtual interface.</p>
   */
  bgpPeers?: BGPPeer[];

  /**
   * <p>The Amazon Web Services Region where the virtual interface is located.</p>
   */
  region?: string;

  /**
   * <p>The Direct Connect endpoint that terminates the physical connection.</p>
   */
  awsDeviceV2?: string;

  /**
   * <p>The Direct Connect endpoint that terminates the logical connection. This device might be
   *       different than the device that terminates the physical connection.</p>
   */
  awsLogicalDeviceId?: string;

  /**
   * <p>The tags associated with the virtual interface.</p>
   */
  tags?: Tag[];

  /**
   * <p>Indicates whether SiteLink is enabled.</p>
   */
  siteLinkEnabled?: boolean;
}

export namespace VirtualInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualInterface): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a public virtual interface to be provisioned on a connection.</p>
 */
export interface NewPublicVirtualInterfaceAllocation {
  /**
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   */
  virtualInterfaceName: string | undefined;

  /**
   * <p>The ID of the VLAN.</p>
   */
  vlan: number | undefined;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn: number | undefined;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily | string;

  /**
   * <p>The routes to be advertised to the Amazon Web Services network in this Region. Applies to public virtual interfaces.</p>
   */
  routeFilterPrefixes?: RouteFilterPrefix[];

  /**
   * <p>The tags associated with the public virtual interface.</p>
   */
  tags?: Tag[];
}

export namespace NewPublicVirtualInterfaceAllocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NewPublicVirtualInterfaceAllocation): any => ({
    ...obj,
  });
}

export interface AllocatePublicVirtualInterfaceRequest {
  /**
   * <p>The ID of the connection on which the public virtual interface is provisioned.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the public virtual interface.</p>
   */
  ownerAccount: string | undefined;

  /**
   * <p>Information about the public virtual interface.</p>
   */
  newPublicVirtualInterfaceAllocation: NewPublicVirtualInterfaceAllocation | undefined;
}

export namespace AllocatePublicVirtualInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllocatePublicVirtualInterfaceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a transit virtual interface to be provisioned on a connection.</p>
 */
export interface NewTransitVirtualInterfaceAllocation {
  /**
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   */
  virtualInterfaceName?: string;

  /**
   * <p>The ID of the VLAN.</p>
   */
  vlan?: number;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn?: number;

  /**
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500. </p>
   */
  mtu?: number;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily | string;

  /**
   * <p>The tags associated with the transitive virtual interface.</p>
   */
  tags?: Tag[];
}

export namespace NewTransitVirtualInterfaceAllocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NewTransitVirtualInterfaceAllocation): any => ({
    ...obj,
  });
}

export interface AllocateTransitVirtualInterfaceRequest {
  /**
   * <p>The ID of the connection on which the transit virtual interface is provisioned.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the transit virtual interface.</p>
   */
  ownerAccount: string | undefined;

  /**
   * <p>Information about the transit virtual interface.</p>
   */
  newTransitVirtualInterfaceAllocation: NewTransitVirtualInterfaceAllocation | undefined;
}

export namespace AllocateTransitVirtualInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllocateTransitVirtualInterfaceRequest): any => ({
    ...obj,
  });
}

export interface AllocateTransitVirtualInterfaceResult {
  /**
   * <p>Information about a virtual interface.</p>
   */
  virtualInterface?: VirtualInterface;
}

export namespace AllocateTransitVirtualInterfaceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllocateTransitVirtualInterfaceResult): any => ({
    ...obj,
  });
}

export interface AssociateConnectionWithLagRequest {
  /**
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>The ID of the LAG with which to associate the connection.</p>
   */
  lagId: string | undefined;
}

export namespace AssociateConnectionWithLagRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateConnectionWithLagRequest): any => ({
    ...obj,
  });
}

export interface AssociateHostedConnectionRequest {
  /**
   * <p>The ID of the hosted connection.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>The ID of the interconnect or the LAG.</p>
   */
  parentConnectionId: string | undefined;
}

export namespace AssociateHostedConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateHostedConnectionRequest): any => ({
    ...obj,
  });
}

export interface AssociateMacSecKeyRequest {
  /**
   * <p>The ID of the dedicated connection (dxcon-xxxx), or the ID of the LAG (dxlag-xxxx).</p>
   *          <p>You can use <a>DescribeConnections</a> or <a>DescribeLags</a> to retrieve connection ID.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key to associate with the dedicated connection.</p>
   *          <p>You can use <a>DescribeConnections</a> or <a>DescribeLags</a> to retrieve the MAC Security (MACsec) secret key.</p>
   *          <p>If you use this request parameter, you do not use the <code>ckn</code> and <code>cak</code> request parameters.</p>
   */
  secretARN?: string;

  /**
   * <p>The MAC Security (MACsec) CKN to associate with the dedicated connection.</p>
   *          <p>You can create the CKN/CAK pair using an industry standard tool.</p>
   *          <p> The valid values are 64 hexadecimal characters (0-9, A-E).</p>
   *          <p>If you use this request parameter, you must use the <code>cak</code> request parameter and not use the <code>secretARN</code> request parameter.</p>
   */
  ckn?: string;

  /**
   * <p>The MAC Security (MACsec) CAK to associate with the dedicated connection.</p>
   *          <p>You can create the CKN/CAK pair using an industry standard tool.</p>
   *          <p> The valid values are 64 hexadecimal characters (0-9, A-E).</p>
   *          <p>If you use this request parameter, you must use the <code>ckn</code> request parameter and not use the <code>secretARN</code> request parameter.</p>
   */
  cak?: string;
}

export namespace AssociateMacSecKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateMacSecKeyRequest): any => ({
    ...obj,
  });
}

export interface AssociateMacSecKeyResponse {
  /**
   * <p>The ID of the dedicated connection (dxcon-xxxx), or the ID of the LAG (dxlag-xxxx).</p>
   */
  connectionId?: string;

  /**
   * <p>The MAC Security (MACsec) security keys associated with the dedicated connection.</p>
   */
  macSecKeys?: MacSecKey[];
}

export namespace AssociateMacSecKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateMacSecKeyResponse): any => ({
    ...obj,
  });
}

export interface AssociateVirtualInterfaceRequest {
  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId: string | undefined;

  /**
   * <p>The ID of the LAG or connection.</p>
   */
  connectionId: string | undefined;
}

export namespace AssociateVirtualInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateVirtualInterfaceRequest): any => ({
    ...obj,
  });
}

export interface ConfirmConnectionRequest {
  /**
   * <p>The ID of the hosted connection.</p>
   */
  connectionId: string | undefined;
}

export namespace ConfirmConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfirmConnectionRequest): any => ({
    ...obj,
  });
}

export interface ConfirmConnectionResponse {
  /**
   * <p>The state of the connection. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ordering</code>: The initial state of a hosted connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted connection confirms or declines the connection order.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requested</code>: The initial state of a standard connection. The connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The connection has been approved and is being initialized.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The network link is up and the connection is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: The network link is down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The connection is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The connection has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: A hosted connection in the <code>ordering</code> state enters the <code>rejected</code> state if it is deleted by the customer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the connection is not available.</p>
   *             </li>
   *          </ul>
   */
  connectionState?: ConnectionState | string;
}

export namespace ConfirmConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfirmConnectionResponse): any => ({
    ...obj,
  });
}

export interface ConfirmCustomerAgreementRequest {
  /**
   * <p>
   *
   *       The name of the customer agreement.
   *
   *     </p>
   */
  agreementName?: string;
}

export namespace ConfirmCustomerAgreementRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfirmCustomerAgreementRequest): any => ({
    ...obj,
  });
}

export interface ConfirmCustomerAgreementResponse {
  /**
   * <p>
   *       The status of the customer agreement when the connection was created. This will be either <code>signed</code> or <code>unsigned</code>.
   *     </p>
   */
  status?: string;
}

export namespace ConfirmCustomerAgreementResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfirmCustomerAgreementResponse): any => ({
    ...obj,
  });
}

export interface ConfirmPrivateVirtualInterfaceRequest {
  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId: string | undefined;

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  virtualGatewayId?: string;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;
}

export namespace ConfirmPrivateVirtualInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfirmPrivateVirtualInterfaceRequest): any => ({
    ...obj,
  });
}

export interface ConfirmPrivateVirtualInterfaceResponse {
  /**
   * <p>The state of the virtual interface. The following are the possible values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: A virtual interface that is able to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: A virtual interface that is BGP down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: A virtual interface that cannot forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the virtual interface is not available.</p>
   *             </li>
   *          </ul>
   */
  virtualInterfaceState?: VirtualInterfaceState | string;
}

export namespace ConfirmPrivateVirtualInterfaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfirmPrivateVirtualInterfaceResponse): any => ({
    ...obj,
  });
}

export interface ConfirmPublicVirtualInterfaceRequest {
  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId: string | undefined;
}

export namespace ConfirmPublicVirtualInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfirmPublicVirtualInterfaceRequest): any => ({
    ...obj,
  });
}

export interface ConfirmPublicVirtualInterfaceResponse {
  /**
   * <p>The state of the virtual interface. The following are the possible values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: A virtual interface that is able to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: A virtual interface that is BGP down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: A virtual interface that cannot forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the virtual interface is not available.</p>
   *             </li>
   *          </ul>
   */
  virtualInterfaceState?: VirtualInterfaceState | string;
}

export namespace ConfirmPublicVirtualInterfaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfirmPublicVirtualInterfaceResponse): any => ({
    ...obj,
  });
}

export interface ConfirmTransitVirtualInterfaceRequest {
  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId: string | undefined;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId: string | undefined;
}

export namespace ConfirmTransitVirtualInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfirmTransitVirtualInterfaceRequest): any => ({
    ...obj,
  });
}

export interface ConfirmTransitVirtualInterfaceResponse {
  /**
   * <p>The state of the virtual interface. The following are the possible values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: A virtual interface that is able to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: A virtual interface that is BGP down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: A virtual interface that cannot forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the virtual interface is not available.</p>
   *             </li>
   *          </ul>
   */
  virtualInterfaceState?: VirtualInterfaceState | string;
}

export namespace ConfirmTransitVirtualInterfaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfirmTransitVirtualInterfaceResponse): any => ({
    ...obj,
  });
}

export interface Connections {
  /**
   * <p>The connections.</p>
   */
  connections?: Connection[];
}

export namespace Connections {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Connections): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a new BGP peer.</p>
 */
export interface NewBGPPeer {
  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   */
  asn?: number;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily | string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;
}

export namespace NewBGPPeer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NewBGPPeer): any => ({
    ...obj,
  });
}

export interface CreateBGPPeerRequest {
  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;

  /**
   * <p>Information about the BGP peer.</p>
   */
  newBGPPeer?: NewBGPPeer;
}

export namespace CreateBGPPeerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBGPPeerRequest): any => ({
    ...obj,
  });
}

export interface CreateBGPPeerResponse {
  /**
   * <p>The virtual interface.</p>
   */
  virtualInterface?: VirtualInterface;
}

export namespace CreateBGPPeerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBGPPeerResponse): any => ({
    ...obj,
  });
}

export interface CreateConnectionRequest {
  /**
   * <p>The location of the connection.</p>
   */
  location: string | undefined;

  /**
   * <p>The bandwidth of the connection.</p>
   */
  bandwidth: string | undefined;

  /**
   * <p>The name of the connection.</p>
   */
  connectionName: string | undefined;

  /**
   * <p>The ID of the LAG.</p>
   */
  lagId?: string;

  /**
   * <p>The tags to associate with the lag.</p>
   */
  tags?: Tag[];

  /**
   * <p>The name of the service provider associated with the requested connection.</p>
   */
  providerName?: string;

  /**
   * <p>Indicates whether you want the connection to support MAC Security (MACsec).</p>
   *          <p>MAC Security (MACsec) is only available on dedicated connections. For information about MAC Security (MACsec) prerequisties, see  <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-prerequisites">MACsec prerequisties</a> in the <i>Direct Connect User Guide</i>.</p>
   */
  requestMACSec?: boolean;
}

export namespace CreateConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectionRequest): any => ({
    ...obj,
  });
}

export interface CreateDirectConnectGatewayRequest {
  /**
   * <p>The name of the Direct Connect gateway.</p>
   */
  directConnectGatewayName: string | undefined;

  /**
   * <p>The autonomous system number (ASN) for Border Gateway Protocol (BGP) to be configured
   *       on the Amazon side of the connection. The ASN must be in the private range of 64,512 to
   *       65,534 or 4,200,000,000 to 4,294,967,294. The default is 64512.</p>
   */
  amazonSideAsn?: number;
}

export namespace CreateDirectConnectGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDirectConnectGatewayRequest): any => ({
    ...obj,
  });
}

export type DirectConnectGatewayState = "available" | "deleted" | "deleting" | "pending";

/**
 * <p>Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways.</p>
 */
export interface DirectConnectGateway {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The name of the Direct Connect gateway.</p>
   */
  directConnectGatewayName?: string;

  /**
   * <p>The autonomous system number (ASN) for the Amazon side of the connection.</p>
   */
  amazonSideAsn?: number;

  /**
   * <p>The ID of the Amazon Web Services account that owns the Direct Connect gateway.</p>
   */
  ownerAccount?: string;

  /**
   * <p>The state of the Direct Connect gateway. The following are the possible values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The initial state after calling <a>CreateDirectConnectGateway</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The Direct Connect gateway is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The initial state after calling <a>DeleteDirectConnectGateway</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The Direct Connect gateway is deleted and cannot pass traffic.</p>
   *             </li>
   *          </ul>
   */
  directConnectGatewayState?: DirectConnectGatewayState | string;

  /**
   * <p>The error message if the state of an object failed to advance.</p>
   */
  stateChangeError?: string;
}

export namespace DirectConnectGateway {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectConnectGateway): any => ({
    ...obj,
  });
}

export interface CreateDirectConnectGatewayResult {
  /**
   * <p>The Direct Connect gateway.</p>
   */
  directConnectGateway?: DirectConnectGateway;
}

export namespace CreateDirectConnectGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDirectConnectGatewayResult): any => ({
    ...obj,
  });
}

export interface CreateDirectConnectGatewayAssociationRequest {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId: string | undefined;

  /**
   * <p>The ID of the virtual private gateway or transit gateway.</p>
   */
  gatewayId?: string;

  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway</p>
   *          <p>This parameter is required when you create an association to a transit gateway.</p>
   *          <p>For information about how to set the prefixes, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/multi-account-associate-vgw.html#allowed-prefixes">Allowed Prefixes</a> in the <i>Direct Connect User Guide</i>.</p>
   */
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  virtualGatewayId?: string;
}

export namespace CreateDirectConnectGatewayAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDirectConnectGatewayAssociationRequest): any => ({
    ...obj,
  });
}

export interface CreateDirectConnectGatewayAssociationResult {
  /**
   * <p>The association to be created.</p>
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}

export namespace CreateDirectConnectGatewayAssociationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDirectConnectGatewayAssociationResult): any => ({
    ...obj,
  });
}

export interface CreateDirectConnectGatewayAssociationProposalRequest {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the Direct Connect gateway.</p>
   */
  directConnectGatewayOwnerAccount: string | undefined;

  /**
   * <p>The ID of the virtual private gateway or transit gateway.</p>
   */
  gatewayId: string | undefined;

  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   */
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  /**
   * <p>The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway.</p>
   */
  removeAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
}

export namespace CreateDirectConnectGatewayAssociationProposalRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDirectConnectGatewayAssociationProposalRequest): any => ({
    ...obj,
  });
}

export type DirectConnectGatewayAssociationProposalState = "accepted" | "deleted" | "requested";

/**
 * <p>Information about the  proposal request to attach a virtual private gateway to a Direct Connect gateway. </p>
 */
export interface DirectConnectGatewayAssociationProposal {
  /**
   * <p>The ID of the association proposal.</p>
   */
  proposalId?: string;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the Direct Connect gateway.</p>
   */
  directConnectGatewayOwnerAccount?: string;

  /**
   * <p>The state of the proposal. The following are possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>accepted</code>: The proposal has been accepted. The Direct Connect gateway association is available to use in this state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The proposal has been deleted by the owner that made the proposal.  The Direct Connect gateway association cannot be used in this state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requested</code>: The proposal has been requested. The Direct Connect gateway association cannot be used in this state.</p>
   *             </li>
   *          </ul>
   */
  proposalState?: DirectConnectGatewayAssociationProposalState | string;

  /**
   * <p>Information about the associated gateway.</p>
   */
  associatedGateway?: AssociatedGateway;

  /**
   * <p>The existing Amazon VPC prefixes advertised to the Direct Connect gateway.</p>
   */
  existingAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   */
  requestedAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
}

export namespace DirectConnectGatewayAssociationProposal {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectConnectGatewayAssociationProposal): any => ({
    ...obj,
  });
}

export interface CreateDirectConnectGatewayAssociationProposalResult {
  /**
   * <p>Information about the Direct Connect gateway proposal.</p>
   */
  directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal;
}

export namespace CreateDirectConnectGatewayAssociationProposalResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDirectConnectGatewayAssociationProposalResult): any => ({
    ...obj,
  });
}

export interface CreateInterconnectRequest {
  /**
   * <p>The name of the interconnect.</p>
   */
  interconnectName: string | undefined;

  /**
   * <p>The port bandwidth, in Gbps. The possible values are 1 and 10.</p>
   */
  bandwidth: string | undefined;

  /**
   * <p>The location of the interconnect.</p>
   */
  location: string | undefined;

  /**
   * <p>The ID of the LAG.</p>
   */
  lagId?: string;

  /**
   * <p>The tags to associate with the interconnect.</p>
   */
  tags?: Tag[];

  /**
   * <p>The name of the service provider associated with the interconnect.</p>
   */
  providerName?: string;
}

export namespace CreateInterconnectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInterconnectRequest): any => ({
    ...obj,
  });
}

export type InterconnectState = "available" | "deleted" | "deleting" | "down" | "pending" | "requested" | "unknown";

/**
 * <p>Information about an interconnect.</p>
 */
export interface Interconnect {
  /**
   * <p>The ID of the interconnect.</p>
   */
  interconnectId?: string;

  /**
   * <p>The name of the interconnect.</p>
   */
  interconnectName?: string;

  /**
   * <p>The state of the interconnect. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>requested</code>: The initial state of an interconnect. The interconnect stays in the
   *         requested state until the Letter of Authorization (LOA) is sent to the customer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The interconnect is approved, and is being initialized.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The network link is up, and the interconnect is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: The network link is down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The interconnect is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The interconnect is deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the interconnect is not available.</p>
   *             </li>
   *          </ul>
   */
  interconnectState?: InterconnectState | string;

  /**
   * <p>The Amazon Web Services Region where the connection is located.</p>
   */
  region?: string;

  /**
   * <p>The location of the connection.</p>
   */
  location?: string;

  /**
   * <p>The bandwidth of the connection.</p>
   */
  bandwidth?: string;

  /**
   * <p>The time of the most recent call to <a>DescribeLoa</a> for this connection.</p>
   */
  loaIssueTime?: Date;

  /**
   * <p>The ID of the LAG.</p>
   */
  lagId?: string;

  /**
   * @deprecated
   *
   * <p>The Direct Connect endpoint on which the physical connection terminates.</p>
   */
  awsDevice?: string;

  /**
   * <p>Indicates whether jumbo frames (9001 MTU) are supported.</p>
   */
  jumboFrameCapable?: boolean;

  /**
   * <p>The Direct Connect endpoint that terminates the physical connection.</p>
   */
  awsDeviceV2?: string;

  /**
   * <p>The Direct Connect endpoint that terminates the logical connection. This device might be
   *       different than the device that terminates the physical connection.</p>
   */
  awsLogicalDeviceId?: string;

  /**
   * <p>Indicates whether the interconnect supports a secondary BGP in the same address family (IPv4/IPv6).</p>
   */
  hasLogicalRedundancy?: HasLogicalRedundancy | string;

  /**
   * <p>The tags associated with the interconnect.</p>
   */
  tags?: Tag[];

  /**
   * <p>The name of the service provider associated with the interconnect.</p>
   */
  providerName?: string;
}

export namespace Interconnect {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Interconnect): any => ({
    ...obj,
  });
}

export interface CreateLagRequest {
  /**
   * <p>The number of physical dedicated connections initially provisioned and bundled by the
   *       LAG.</p>
   */
  numberOfConnections: number | undefined;

  /**
   * <p>The location for the LAG.</p>
   */
  location: string | undefined;

  /**
   * <p>The bandwidth of the individual physical dedicated connections bundled by the LAG. The
   *       possible values are 1Gbps and 10Gbps. </p>
   */
  connectionsBandwidth: string | undefined;

  /**
   * <p>The name of the LAG.</p>
   */
  lagName: string | undefined;

  /**
   * <p>The ID of an existing dedicated connection to migrate to the LAG.</p>
   */
  connectionId?: string;

  /**
   * <p>The tags to associate with the LAG.</p>
   */
  tags?: Tag[];

  /**
   * <p>The tags to associate with the automtically created LAGs.</p>
   */
  childConnectionTags?: Tag[];

  /**
   * <p>The name of the service provider associated with the LAG.</p>
   */
  providerName?: string;

  /**
   * <p>Indicates whether the connection will support MAC Security (MACsec).</p>
   *          <note>
   *             <p>All connections in the LAG must be capable of  supporting MAC Security (MACsec). For information about MAC Security (MACsec) prerequisties, see  <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-prerequisites">MACsec prerequisties</a> in the <i>Direct Connect User Guide</i>.</p>
   *          </note>
   */
  requestMACSec?: boolean;
}

export namespace CreateLagRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLagRequest): any => ({
    ...obj,
  });
}

export type LagState = "available" | "deleted" | "deleting" | "down" | "pending" | "requested" | "unknown";

/**
 * <p>Information about a link aggregation group (LAG).</p>
 */
export interface Lag {
  /**
   * <p>The individual bandwidth of the physical connections bundled by the LAG. The possible
   *       values are 1Gbps and 10Gbps. </p>
   */
  connectionsBandwidth?: string;

  /**
   * <p>The number of physical dedicated connections bundled by the LAG, up to a maximum of 10.</p>
   */
  numberOfConnections?: number;

  /**
   * <p>The ID of the LAG.</p>
   */
  lagId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the LAG.</p>
   */
  ownerAccount?: string;

  /**
   * <p>The name of the LAG.</p>
   */
  lagName?: string;

  /**
   * <p>The state of the LAG. The following are the possible values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>requested</code>: The initial state of a LAG. The LAG stays in the
   *                 requested state until the Letter of Authorization (LOA) is available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The LAG has been approved and is being initialized.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The network link is established and the LAG is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: The network link is down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The LAG is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The LAG is deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the LAG is not available.</p>
   *             </li>
   *          </ul>
   */
  lagState?: LagState | string;

  /**
   * <p>The location of the LAG.</p>
   */
  location?: string;

  /**
   * <p>The Amazon Web Services Region where the connection is located.</p>
   */
  region?: string;

  /**
   * <p>The minimum number of physical dedicated connections that must be operational for the LAG itself to be operational.</p>
   */
  minimumLinks?: number;

  /**
   * @deprecated
   *
   * <p>The Direct Connect endpoint that hosts the LAG.</p>
   */
  awsDevice?: string;

  /**
   * <p>The Direct Connect endpoint that hosts the LAG.</p>
   */
  awsDeviceV2?: string;

  /**
   * <p>The Direct Connect endpoint that terminates the logical connection. This device might be
   *       different than the device that terminates the physical connection.</p>
   */
  awsLogicalDeviceId?: string;

  /**
   * <p>The connections bundled by the LAG.</p>
   */
  connections?: Connection[];

  /**
   * <p>Indicates whether the LAG can host other connections.</p>
   */
  allowsHostedConnections?: boolean;

  /**
   * <p>Indicates whether jumbo frames (9001 MTU) are supported.</p>
   */
  jumboFrameCapable?: boolean;

  /**
   * <p>Indicates whether the LAG supports a secondary BGP peer in the same address family (IPv4/IPv6).</p>
   */
  hasLogicalRedundancy?: HasLogicalRedundancy | string;

  /**
   * <p>The tags associated with the LAG.</p>
   */
  tags?: Tag[];

  /**
   * <p>The name of the service provider associated with the LAG.</p>
   */
  providerName?: string;

  /**
   * <p>Indicates whether the LAG supports MAC Security (MACsec).</p>
   */
  macSecCapable?: boolean;

  /**
   * <p>The LAG MAC Security (MACsec) encryption mode.</p>
   *          <p>The valid values are <code>no_encrypt</code>, <code>should_encrypt</code>, and <code>must_encrypt</code>.</p>
   */
  encryptionMode?: string;

  /**
   * <p>The MAC Security (MACsec) security keys associated with the LAG.</p>
   */
  macSecKeys?: MacSecKey[];
}

export namespace Lag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Lag): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a private virtual interface.</p>
 */
export interface NewPrivateVirtualInterface {
  /**
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   */
  virtualInterfaceName: string | undefined;

  /**
   * <p>The ID of the VLAN.</p>
   */
  vlan: number | undefined;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn: number | undefined;

  /**
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.</p>
   */
  mtu?: number;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily | string;

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  virtualGatewayId?: string;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The tags associated with the private virtual interface.</p>
   */
  tags?: Tag[];

  /**
   * <p>Indicates whether to enable or disable SiteLink.</p>
   */
  enableSiteLink?: boolean;
}

export namespace NewPrivateVirtualInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NewPrivateVirtualInterface): any => ({
    ...obj,
  });
}

export interface CreatePrivateVirtualInterfaceRequest {
  /**
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>Information about the private virtual interface.</p>
   */
  newPrivateVirtualInterface: NewPrivateVirtualInterface | undefined;
}

export namespace CreatePrivateVirtualInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePrivateVirtualInterfaceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a public virtual interface.</p>
 */
export interface NewPublicVirtualInterface {
  /**
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   */
  virtualInterfaceName: string | undefined;

  /**
   * <p>The ID of the VLAN.</p>
   */
  vlan: number | undefined;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn: number | undefined;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily | string;

  /**
   * <p>The routes to be advertised to the Amazon Web Services network in this Region. Applies to public virtual interfaces.</p>
   */
  routeFilterPrefixes?: RouteFilterPrefix[];

  /**
   * <p>The tags associated with the public virtual interface.</p>
   */
  tags?: Tag[];
}

export namespace NewPublicVirtualInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NewPublicVirtualInterface): any => ({
    ...obj,
  });
}

export interface CreatePublicVirtualInterfaceRequest {
  /**
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>Information about the public virtual interface.</p>
   */
  newPublicVirtualInterface: NewPublicVirtualInterface | undefined;
}

export namespace CreatePublicVirtualInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePublicVirtualInterfaceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a transit virtual interface.</p>
 */
export interface NewTransitVirtualInterface {
  /**
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   */
  virtualInterfaceName?: string;

  /**
   * <p>The ID of the VLAN.</p>
   */
  vlan?: number;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn?: number;

  /**
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.</p>
   */
  mtu?: number;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily | string;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The tags associated with the transitive virtual interface.</p>
   */
  tags?: Tag[];

  /**
   * <p>Indicates whether to enable or disable SiteLink.</p>
   */
  enableSiteLink?: boolean;
}

export namespace NewTransitVirtualInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NewTransitVirtualInterface): any => ({
    ...obj,
  });
}

export interface CreateTransitVirtualInterfaceRequest {
  /**
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>Information about the transit virtual interface.</p>
   */
  newTransitVirtualInterface: NewTransitVirtualInterface | undefined;
}

export namespace CreateTransitVirtualInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitVirtualInterfaceRequest): any => ({
    ...obj,
  });
}

export interface CreateTransitVirtualInterfaceResult {
  /**
   * <p>Information about a virtual interface.</p>
   */
  virtualInterface?: VirtualInterface;
}

export namespace CreateTransitVirtualInterfaceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitVirtualInterfaceResult): any => ({
    ...obj,
  });
}

export interface DeleteBGPPeerRequest {
  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   */
  asn?: number;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * <p>The ID of the BGP peer.</p>
   */
  bgpPeerId?: string;
}

export namespace DeleteBGPPeerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBGPPeerRequest): any => ({
    ...obj,
  });
}

export interface DeleteBGPPeerResponse {
  /**
   * <p>The virtual interface.</p>
   */
  virtualInterface?: VirtualInterface;
}

export namespace DeleteBGPPeerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBGPPeerResponse): any => ({
    ...obj,
  });
}

export interface DeleteConnectionRequest {
  /**
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;
}

export namespace DeleteConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectionRequest): any => ({
    ...obj,
  });
}

export interface DeleteDirectConnectGatewayRequest {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId: string | undefined;
}

export namespace DeleteDirectConnectGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDirectConnectGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeleteDirectConnectGatewayResult {
  /**
   * <p>The Direct Connect gateway.</p>
   */
  directConnectGateway?: DirectConnectGateway;
}

export namespace DeleteDirectConnectGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDirectConnectGatewayResult): any => ({
    ...obj,
  });
}

export interface DeleteDirectConnectGatewayAssociationRequest {
  /**
   * <p>The ID of the Direct Connect gateway association.</p>
   */
  associationId?: string;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  virtualGatewayId?: string;
}

export namespace DeleteDirectConnectGatewayAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDirectConnectGatewayAssociationRequest): any => ({
    ...obj,
  });
}

export interface DeleteDirectConnectGatewayAssociationResult {
  /**
   * <p>Information about the deleted association.</p>
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}

export namespace DeleteDirectConnectGatewayAssociationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDirectConnectGatewayAssociationResult): any => ({
    ...obj,
  });
}

export interface DeleteDirectConnectGatewayAssociationProposalRequest {
  /**
   * <p>The ID of the proposal.</p>
   */
  proposalId: string | undefined;
}

export namespace DeleteDirectConnectGatewayAssociationProposalRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDirectConnectGatewayAssociationProposalRequest): any => ({
    ...obj,
  });
}

export interface DeleteDirectConnectGatewayAssociationProposalResult {
  /**
   * <p>The ID of the associated gateway.</p>
   */
  directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal;
}

export namespace DeleteDirectConnectGatewayAssociationProposalResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDirectConnectGatewayAssociationProposalResult): any => ({
    ...obj,
  });
}

export interface DeleteInterconnectRequest {
  /**
   * <p>The ID of the interconnect.</p>
   */
  interconnectId: string | undefined;
}

export namespace DeleteInterconnectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInterconnectRequest): any => ({
    ...obj,
  });
}

export interface DeleteInterconnectResponse {
  /**
   * <p>The state of the interconnect. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>requested</code>: The initial state of an interconnect. The interconnect stays in the
   *         requested state until the Letter of Authorization (LOA) is sent to the customer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The interconnect is approved, and is being initialized.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The network link is up, and the interconnect is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: The network link is down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The interconnect is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The interconnect is deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the interconnect is not available.</p>
   *             </li>
   *          </ul>
   */
  interconnectState?: InterconnectState | string;
}

export namespace DeleteInterconnectResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInterconnectResponse): any => ({
    ...obj,
  });
}

export interface DeleteLagRequest {
  /**
   * <p>The ID of the LAG.</p>
   */
  lagId: string | undefined;
}

export namespace DeleteLagRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLagRequest): any => ({
    ...obj,
  });
}

export interface DeleteVirtualInterfaceRequest {
  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId: string | undefined;
}

export namespace DeleteVirtualInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVirtualInterfaceRequest): any => ({
    ...obj,
  });
}

export interface DeleteVirtualInterfaceResponse {
  /**
   * <p>The state of the virtual interface. The following are the possible values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: A virtual interface that is able to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: A virtual interface that is BGP down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: A virtual interface that cannot forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the virtual interface is not available.</p>
   *             </li>
   *          </ul>
   */
  virtualInterfaceState?: VirtualInterfaceState | string;
}

export namespace DeleteVirtualInterfaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVirtualInterfaceResponse): any => ({
    ...obj,
  });
}

export enum LoaContentType {
  PDF = "application/pdf",
}

export interface DescribeConnectionLoaRequest {
  /**
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>The name of the APN partner or service provider who establishes connectivity on your behalf. If you specify this parameter,
   *       the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.</p>
   */
  providerName?: string;

  /**
   * <p>The standard media type for the LOA-CFA document. The only supported value is application/pdf.</p>
   */
  loaContentType?: LoaContentType | string;
}

export namespace DescribeConnectionLoaRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConnectionLoaRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection.</p>
 */
export interface Loa {
  /**
   * <p>The binary contents of the LOA-CFA document.</p>
   */
  loaContent?: Uint8Array;

  /**
   * <p>The standard media type for the LOA-CFA document. The only supported value is application/pdf.</p>
   */
  loaContentType?: LoaContentType | string;
}

export namespace Loa {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Loa): any => ({
    ...obj,
  });
}

export interface DescribeConnectionLoaResponse {
  /**
   * <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA).</p>
   */
  loa?: Loa;
}

export namespace DescribeConnectionLoaResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConnectionLoaResponse): any => ({
    ...obj,
  });
}

export interface DescribeConnectionsRequest {
  /**
   * <p>The ID of the connection.</p>
   */
  connectionId?: string;
}

export namespace DescribeConnectionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConnectionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeConnectionsOnInterconnectRequest {
  /**
   * <p>The ID of the interconnect.</p>
   */
  interconnectId: string | undefined;
}

export namespace DescribeConnectionsOnInterconnectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConnectionsOnInterconnectRequest): any => ({
    ...obj,
  });
}

export enum NniPartnerType {
  NonPartner = "nonPartner",
  V1 = "v1",
  V2 = "v2",
}

export interface DescribeCustomerMetadataResponse {
  /**
   * <p>The list of customer agreements.</p>
   */
  agreements?: CustomerAgreement[];

  /**
   * <p>The type of network-to-network interface (NNI) partner. The partner type will be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>V1: This partner can only allocate 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, or 500Mbps subgigabit connections.</p>
   *             </li>
   *             <li>
   *                <p>V2: This partner can only allocate 1GB, 2GB, 5GB, or 10GB hosted connections.</p>
   *             </li>
   *             <li>
   *                <p>nonPartner: The customer is not a partner.</p>
   *             </li>
   *          </ul>
   */
  nniPartnerType?: NniPartnerType | string;
}

export namespace DescribeCustomerMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCustomerMetadataResponse): any => ({
    ...obj,
  });
}

export interface DescribeDirectConnectGatewayAssociationProposalsRequest {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The ID of the proposal.</p>
   */
  proposalId?: string;

  /**
   * <p>The ID of the associated gateway.</p>
   */
  associatedGatewayId?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * 	        <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

export namespace DescribeDirectConnectGatewayAssociationProposalsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDirectConnectGatewayAssociationProposalsRequest): any => ({
    ...obj,
  });
}

export interface DescribeDirectConnectGatewayAssociationProposalsResult {
  /**
   * <p>Describes the Direct Connect gateway association proposals.</p>
   */
  directConnectGatewayAssociationProposals?: DirectConnectGatewayAssociationProposal[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace DescribeDirectConnectGatewayAssociationProposalsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDirectConnectGatewayAssociationProposalsResult): any => ({
    ...obj,
  });
}

export interface DescribeDirectConnectGatewayAssociationsRequest {
  /**
   * <p>The ID of the Direct Connect gateway association.</p>
   */
  associationId?: string;

  /**
   * <p>The ID of the associated gateway.</p>
   */
  associatedGatewayId?: string;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * 	        <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The token provided in the previous call to retrieve the next page.</p>
   */
  nextToken?: string;

  /**
   * <p>The ID of the virtual private gateway or transit gateway.</p>
   */
  virtualGatewayId?: string;
}

export namespace DescribeDirectConnectGatewayAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDirectConnectGatewayAssociationsRequest): any => ({
    ...obj,
  });
}

export interface DescribeDirectConnectGatewayAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   */
  directConnectGatewayAssociations?: DirectConnectGatewayAssociation[];

  /**
   * <p>The token to retrieve the next page.</p>
   */
  nextToken?: string;
}

export namespace DescribeDirectConnectGatewayAssociationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDirectConnectGatewayAssociationsResult): any => ({
    ...obj,
  });
}

export interface DescribeDirectConnectGatewayAttachmentsRequest {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * 	        <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The token provided in the previous call to retrieve the next page.</p>
   */
  nextToken?: string;
}

export namespace DescribeDirectConnectGatewayAttachmentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDirectConnectGatewayAttachmentsRequest): any => ({
    ...obj,
  });
}

export type DirectConnectGatewayAttachmentState = "attached" | "attaching" | "detached" | "detaching";

export type DirectConnectGatewayAttachmentType = "PrivateVirtualInterface" | "TransitVirtualInterface";

/**
 * <p>Information about an attachment between a Direct Connect gateway and a virtual interface.</p>
 */
export interface DirectConnectGatewayAttachment {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;

  /**
   * <p>The Amazon Web Services Region where the virtual interface is located.</p>
   */
  virtualInterfaceRegion?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the virtual interface.</p>
   */
  virtualInterfaceOwnerAccount?: string;

  /**
   * <p>The state of the attachment. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>attaching</code>: The initial state after a virtual interface is created using the Direct Connect gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attached</code>: The Direct Connect gateway and virtual interface are attached and ready to pass traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>detaching</code>: The initial state after calling <a>DeleteVirtualInterface</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>detached</code>: The virtual interface is detached from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual interface is stopped.</p>
   *             </li>
   *          </ul>
   */
  attachmentState?: DirectConnectGatewayAttachmentState | string;

  /**
   * <p>The type of attachment.</p>
   */
  attachmentType?: DirectConnectGatewayAttachmentType | string;

  /**
   * <p>The error message if the state of an object failed to advance.</p>
   */
  stateChangeError?: string;
}

export namespace DirectConnectGatewayAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectConnectGatewayAttachment): any => ({
    ...obj,
  });
}

export interface DescribeDirectConnectGatewayAttachmentsResult {
  /**
   * <p>The attachments.</p>
   */
  directConnectGatewayAttachments?: DirectConnectGatewayAttachment[];

  /**
   * <p>The token to retrieve the next page.</p>
   */
  nextToken?: string;
}

export namespace DescribeDirectConnectGatewayAttachmentsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDirectConnectGatewayAttachmentsResult): any => ({
    ...obj,
  });
}

export interface DescribeDirectConnectGatewaysRequest {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * 	        <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The token provided in the previous call to retrieve the next page.</p>
   */
  nextToken?: string;
}

export namespace DescribeDirectConnectGatewaysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDirectConnectGatewaysRequest): any => ({
    ...obj,
  });
}

export interface DescribeDirectConnectGatewaysResult {
  /**
   * <p>The Direct Connect gateways.</p>
   */
  directConnectGateways?: DirectConnectGateway[];

  /**
   * <p>The token to retrieve the next page.</p>
   */
  nextToken?: string;
}

export namespace DescribeDirectConnectGatewaysResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDirectConnectGatewaysResult): any => ({
    ...obj,
  });
}

export interface DescribeHostedConnectionsRequest {
  /**
   * <p>The ID of the interconnect or LAG.</p>
   */
  connectionId: string | undefined;
}

export namespace DescribeHostedConnectionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHostedConnectionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeInterconnectLoaRequest {
  /**
   * <p>The ID of the interconnect.</p>
   */
  interconnectId: string | undefined;

  /**
   * <p>The name of the service provider who establishes connectivity on your behalf. If you supply this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.</p>
   */
  providerName?: string;

  /**
   * <p>The standard media type for the LOA-CFA document. The only supported value is application/pdf.</p>
   */
  loaContentType?: LoaContentType | string;
}

export namespace DescribeInterconnectLoaRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInterconnectLoaRequest): any => ({
    ...obj,
  });
}

export interface DescribeInterconnectLoaResponse {
  /**
   * <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA).</p>
   */
  loa?: Loa;
}

export namespace DescribeInterconnectLoaResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInterconnectLoaResponse): any => ({
    ...obj,
  });
}

export interface DescribeInterconnectsRequest {
  /**
   * <p>The ID of the interconnect.</p>
   */
  interconnectId?: string;
}

export namespace DescribeInterconnectsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInterconnectsRequest): any => ({
    ...obj,
  });
}

export interface Interconnects {
  /**
   * <p>The interconnects.</p>
   */
  interconnects?: Interconnect[];
}

export namespace Interconnects {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Interconnects): any => ({
    ...obj,
  });
}

export interface DescribeLagsRequest {
  /**
   * <p>The ID of the LAG.</p>
   */
  lagId?: string;
}

export namespace DescribeLagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLagsRequest): any => ({
    ...obj,
  });
}

export interface Lags {
  /**
   * <p>The LAGs.</p>
   */
  lags?: Lag[];
}

export namespace Lags {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Lags): any => ({
    ...obj,
  });
}

export interface DescribeLoaRequest {
  /**
   * <p>The ID of a connection, LAG, or interconnect.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>The name of the service provider who establishes connectivity on your behalf. If you specify this parameter, the
   *       LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.</p>
   */
  providerName?: string;

  /**
   * <p>The standard media type for the LOA-CFA document. The only supported value is application/pdf.</p>
   */
  loaContentType?: LoaContentType | string;
}

export namespace DescribeLoaRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLoaRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an Direct Connect location.</p>
 */
export interface Location {
  /**
   * <p>The code for the location.</p>
   */
  locationCode?: string;

  /**
   * <p>The name of the location. This includes the name of the colocation partner and the physical site of the building.</p>
   */
  locationName?: string;

  /**
   * <p>The Amazon Web Services Region for the location.</p>
   */
  region?: string;

  /**
   * <p>The available port speeds for the location.</p>
   */
  availablePortSpeeds?: string[];

  /**
   * <p>The name of the service provider for the location.</p>
   */
  availableProviders?: string[];

  /**
   * <p>The available MAC Security (MACsec) port speeds for the location.</p>
   */
  availableMacSecPortSpeeds?: string[];
}

export namespace Location {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Location): any => ({
    ...obj,
  });
}

export interface Locations {
  /**
   * <p>The locations.</p>
   */
  locations?: Location[];
}

export namespace Locations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Locations): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the details about a virtual interface's router.</p>
 */
export interface DescribeRouterConfigurationRequest {
  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId: string | undefined;

  /**
   * <p>Identifies the router by a combination of vendor, platform, and software version. For example, <code>CiscoSystemsInc-2900SeriesRouters-IOS124</code>.</p>
   */
  routerTypeIdentifier?: string;
}

export namespace DescribeRouterConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRouterConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the virtual router.</p>
 */
export interface RouterType {
  /**
   * <p>The vendor for the virtual interface's router.</p>
   */
  vendor?: string;

  /**
   * <p>The virtual interface router platform.</p>
   */
  platform?: string;

  /**
   * <p>The router software. </p>
   */
  software?: string;

  /**
   * <p>The template for the virtual interface's router.</p>
   */
  xsltTemplateName?: string;

  /**
   * <p>The MAC Security (MACsec) template for the virtual interface's router.</p>
   */
  xsltTemplateNameForMacSec?: string;

  /**
   * <p>Identifies the router by a combination of vendor, platform, and software version. For example, <code>CiscoSystemsInc-2900SeriesRouters-IOS124</code>.</p>
   */
  routerTypeIdentifier?: string;
}

export namespace RouterType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouterType): any => ({
    ...obj,
  });
}

export interface DescribeRouterConfigurationResponse {
  /**
   * <p>The customer router configuration.</p>
   */
  customerRouterConfig?: string;

  /**
   * <p>The details about the router.</p>
   */
  router?: RouterType;

  /**
   * <p>The ID assigned to the virtual interface.</p>
   */
  virtualInterfaceId?: string;

  /**
   * <p>Provides the details about a virtual interface's router.</p>
   */
  virtualInterfaceName?: string;
}

export namespace DescribeRouterConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRouterConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DescribeTagsRequest {
  /**
   * <p>The Amazon Resource Names (ARNs) of the resources.</p>
   */
  resourceArns: string[] | undefined;
}

export namespace DescribeTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTagsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a tag associated with an Direct Connect resource.</p>
 */
export interface ResourceTag {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn?: string;

  /**
   * <p>The tags.</p>
   */
  tags?: Tag[];
}

export namespace ResourceTag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceTag): any => ({
    ...obj,
  });
}

export interface DescribeTagsResponse {
  /**
   * <p>Information about the tags.</p>
   */
  resourceTags?: ResourceTag[];
}

export namespace DescribeTagsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTagsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a virtual private gateway for a private virtual interface.</p>
 */
export interface VirtualGateway {
  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  virtualGatewayId?: string;

  /**
   * <p>The state of the virtual private gateway. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code>: Initial state after creating the virtual private gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: Ready for use by a private virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: Initial state after deleting the virtual private gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The virtual private gateway is deleted. The private virtual interface is unable to send traffic over this gateway.</p>
   *             </li>
   *          </ul>
   */
  virtualGatewayState?: string;
}

export namespace VirtualGateway {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGateway): any => ({
    ...obj,
  });
}

export interface VirtualGateways {
  /**
   * <p>The virtual private gateways.</p>
   */
  virtualGateways?: VirtualGateway[];
}

export namespace VirtualGateways {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGateways): any => ({
    ...obj,
  });
}

export interface DescribeVirtualInterfacesRequest {
  /**
   * <p>The ID of the connection.</p>
   */
  connectionId?: string;

  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;
}

export namespace DescribeVirtualInterfacesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVirtualInterfacesRequest): any => ({
    ...obj,
  });
}

export interface VirtualInterfaces {
  /**
   * <p>The virtual interfaces</p>
   */
  virtualInterfaces?: VirtualInterface[];
}

export namespace VirtualInterfaces {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualInterfaces): any => ({
    ...obj,
  });
}

export interface DisassociateConnectionFromLagRequest {
  /**
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>The ID of the LAG.</p>
   */
  lagId: string | undefined;
}

export namespace DisassociateConnectionFromLagRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateConnectionFromLagRequest): any => ({
    ...obj,
  });
}

export interface DisassociateMacSecKeyRequest {
  /**
   * <p>The ID of the dedicated connection (dxcon-xxxx), or the ID of the LAG (dxlag-xxxx).</p>
   *          <p>You can use <a>DescribeConnections</a> or <a>DescribeLags</a> to retrieve connection ID.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key.</p>
   *          <p>You can use <a>DescribeConnections</a> to retrieve the ARN of the MAC Security (MACsec) secret key.</p>
   */
  secretARN: string | undefined;
}

export namespace DisassociateMacSecKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateMacSecKeyRequest): any => ({
    ...obj,
  });
}

export interface DisassociateMacSecKeyResponse {
  /**
   * <p>The ID of the dedicated connection (dxcon-xxxx), or the ID of the LAG (dxlag-xxxx).</p>
   */
  connectionId?: string;

  /**
   * <p>The MAC Security (MACsec) security keys no longer associated with the dedicated connection.</p>
   */
  macSecKeys?: MacSecKey[];
}

export namespace DisassociateMacSecKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateMacSecKeyResponse): any => ({
    ...obj,
  });
}

export interface ListVirtualInterfaceTestHistoryRequest {
  /**
   * <p>The ID of the virtual interface failover test.</p>
   */
  testId?: string;

  /**
   * <p>The ID of the virtual interface that was tested.</p>
   */
  virtualInterfaceId?: string;

  /**
   * <p>The BGP peers that were placed in the DOWN state during the virtual interface failover test.</p>
   */
  bgpPeers?: string[];

  /**
   * <p>The status of the virtual interface failover test.</p>
   */
  status?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * 	        <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListVirtualInterfaceTestHistoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVirtualInterfaceTestHistoryRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the virtual interface failover test.</p>
 */
export interface VirtualInterfaceTestHistory {
  /**
   * <p>The ID of the virtual interface failover test.</p>
   */
  testId?: string;

  /**
   * <p>The ID of the tested virtual interface.</p>
   */
  virtualInterfaceId?: string;

  /**
   * <p>The BGP peers that were put in the DOWN state as part of the virtual interface failover test.</p>
   */
  bgpPeers?: string[];

  /**
   * <p>The status of the virtual interface failover test.</p>
   */
  status?: string;

  /**
   * <p>The owner ID of the tested virtual interface.</p>
   */
  ownerAccount?: string;

  /**
   * <p>The time that the virtual interface failover test ran in minutes.</p>
   */
  testDurationInMinutes?: number;

  /**
   * <p>The time that the virtual interface moves to the DOWN state.</p>
   */
  startTime?: Date;

  /**
   * <p>The time that the virtual interface moves out of the DOWN state.</p>
   */
  endTime?: Date;
}

export namespace VirtualInterfaceTestHistory {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualInterfaceTestHistory): any => ({
    ...obj,
  });
}

export interface ListVirtualInterfaceTestHistoryResponse {
  /**
   * <p>The ID of the tested virtual interface.</p>
   */
  virtualInterfaceTestHistory?: VirtualInterfaceTestHistory[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListVirtualInterfaceTestHistoryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVirtualInterfaceTestHistoryResponse): any => ({
    ...obj,
  });
}

export interface StartBgpFailoverTestRequest {
  /**
   * <p>The ID of the virtual interface you want to test.</p>
   */
  virtualInterfaceId: string | undefined;

  /**
   * <p>The BGP peers to place in the DOWN state.</p>
   */
  bgpPeers?: string[];

  /**
   * <p>The time in minutes that the virtual interface failover test will last.</p>
   *          <p>Maximum value: 180 minutes (3 hours).</p>
   *          <p>Default: 180 minutes (3 hours).</p>
   */
  testDurationInMinutes?: number;
}

export namespace StartBgpFailoverTestRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartBgpFailoverTestRequest): any => ({
    ...obj,
  });
}

export interface StartBgpFailoverTestResponse {
  /**
   * <p>Information about the virtual interface failover test.</p>
   */
  virtualInterfaceTest?: VirtualInterfaceTestHistory;
}

export namespace StartBgpFailoverTestResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartBgpFailoverTestResponse): any => ({
    ...obj,
  });
}

export interface StopBgpFailoverTestRequest {
  /**
   * <p>The ID of the virtual interface you no longer want to test.</p>
   */
  virtualInterfaceId: string | undefined;
}

export namespace StopBgpFailoverTestRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopBgpFailoverTestRequest): any => ({
    ...obj,
  });
}

export interface StopBgpFailoverTestResponse {
  /**
   * <p>Information about the virtual interface failover test.</p>
   */
  virtualInterfaceTest?: VirtualInterfaceTestHistory;
}

export namespace StopBgpFailoverTestResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopBgpFailoverTestResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add.</p>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys of the tags to remove.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateConnectionRequest {
  /**
   * <p>The ID of the dedicated connection.</p>
   *          <p>You can use <a>DescribeConnections</a> to retrieve the connection ID.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>The name of the connection.</p>
   */
  connectionName?: string;

  /**
   * <p>The connection MAC Security (MACsec) encryption mode.</p>
   *          <p>The valid values are <code>no_encrypt</code>, <code>should_encrypt</code>, and <code>must_encrypt</code>.</p>
   */
  encryptionMode?: string;
}

export namespace UpdateConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConnectionRequest): any => ({
    ...obj,
  });
}

export interface UpdateDirectConnectGatewayRequest {
  /**
   * <p>The ID of the Direct Connect gateway to update.</p>
   */
  directConnectGatewayId: string | undefined;

  /**
   * <p>The new name for the Direct Connect gateway.</p>
   */
  newDirectConnectGatewayName: string | undefined;
}

export namespace UpdateDirectConnectGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDirectConnectGatewayRequest): any => ({
    ...obj,
  });
}

export interface UpdateDirectConnectGatewayResponse {
  /**
   * <p>Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways.</p>
   */
  directConnectGateway?: DirectConnectGateway;
}

export namespace UpdateDirectConnectGatewayResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDirectConnectGatewayResponse): any => ({
    ...obj,
  });
}

export interface UpdateDirectConnectGatewayAssociationRequest {
  /**
   * <p>The ID of the Direct Connect gateway association.</p>
   */
  associationId?: string;

  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   */
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  /**
   * <p>The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway.</p>
   */
  removeAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
}

export namespace UpdateDirectConnectGatewayAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDirectConnectGatewayAssociationRequest): any => ({
    ...obj,
  });
}

export interface UpdateDirectConnectGatewayAssociationResult {
  /**
   * <p>Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.</p>
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}

export namespace UpdateDirectConnectGatewayAssociationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDirectConnectGatewayAssociationResult): any => ({
    ...obj,
  });
}

export interface UpdateLagRequest {
  /**
   * <p>The ID of the LAG.</p>
   */
  lagId: string | undefined;

  /**
   * <p>The name of the LAG.</p>
   */
  lagName?: string;

  /**
   * <p>The minimum number of physical connections that must be operational for the LAG itself to be operational.</p>
   */
  minimumLinks?: number;

  /**
   * <p>The LAG MAC Security (MACsec) encryption mode.</p>
   *          <p>Amazon Web Services applies the value to all connections which are part of the LAG.</p>
   */
  encryptionMode?: string;
}

export namespace UpdateLagRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLagRequest): any => ({
    ...obj,
  });
}

export interface UpdateVirtualInterfaceAttributesRequest {
  /**
   * <p>The ID of the virtual private interface.</p>
   */
  virtualInterfaceId: string | undefined;

  /**
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.</p>
   */
  mtu?: number;

  /**
   * <p>Indicates whether to enable or disable SiteLink.</p>
   */
  enableSiteLink?: boolean;

  /**
   * <p>The name of the virtual private interface.</p>
   */
  virtualInterfaceName?: string;
}

export namespace UpdateVirtualInterfaceAttributesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVirtualInterfaceAttributesRequest): any => ({
    ...obj,
  });
}

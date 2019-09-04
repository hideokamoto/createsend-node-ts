// eslint-disable-next-line @typescript-eslint/no-var-requires
const createsend = require('createsend-node')

export namespace CreateSendNode {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export type Callback = (err: Error, res: any) => Promise<any>
    export interface Client {
        transactional: Transactional;
    }
    export interface Transactional {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sendSmartEmail(details: any, cb: Callback): void;
    }
    export interface SendDetail {
        smartEmailID: string;
        to: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: any;
    }
}

export class CampaignMonitorClient {
    public client: CreateSendNode.Client
    protected header = {
      'x-apple-data-detectors': 'x-apple-data-detectorsTestValue',
      'href^="tel"': 'href^="tel"TestValue',
      'href^="sms"': 'href^="sms"TestValue',
      owa: 'owaTestValue',
      'role=section': 'role=sectionTestValue',
      'style*="font-size:1px"': 'style*="font-size:1px"TestValue'
    }

    /**
     * Constructor
     * @param {string} apiKey Campaign monitor API key
     */
    constructor (apiKey: string) {
      this.client = createsend({
        apiKey
      })
    }

    /**
     * Send transactional Email by Campaign monitor
     * @param {object} details Transactional Email Detail
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public async sendTransactionalEmail<T extends CreateSendNode.SendDetail = CreateSendNode.SendDetail> (details: T): Promise<any> {
      try {
        this.client.transactional.sendSmartEmail(details, (err, res) => {
          console.log('transactional.sendSmartEmail: $j', { err, res })
          if (err) return Promise.reject(err)
          return Promise.resolve(details)
        })
      } catch (e) {
        return Promise.reject(e)
      }
    }
}

export default CampaignMonitorClient

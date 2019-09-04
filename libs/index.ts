// eslint-disable-next-line @typescript-eslint/no-var-requires
const createsend = require('createsend-node')

export namespace CreateSendNode {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export type Callback = (err: Error, res: any) => void | Promise<void>
    export interface Client {
        transactional: Transactional;
    }
    export interface SendTransactionalEmailResponse {
      Status: string;
      MessageId: string;
      Recipient: string;
    }
    export interface Transactional {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sendSmartEmail(details: any, cb: Callback): SendTransactionalEmailResponse[] | Promise<SendTransactionalEmailResponse[]>;
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
    private isDebug: boolean
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
    constructor (apiKey: string, isDebug = false) {
      this.client = createsend({
        apiKey
      })
      this.isDebug = isDebug
    }

    /**
     * Send transactional Email by Campaign monitor
     * @param {object} details Transactional Email Detail
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public async sendTransactionalEmail<T extends CreateSendNode.SendDetail = CreateSendNode.SendDetail> (details: T): Promise<CreateSendNode.SendTransactionalEmailResponse[]> {
      try {
        return new Promise((resolve, reject) => {
          this.client.transactional.sendSmartEmail(details, (err, res) => {
            if (this.isDebug) console.log(`transactional.sendSmartEmail:  ${JSON.stringify({ err, res })}`)
            if (err) {
              return reject(err)
            }
            return resolve(res)
          })
        })
      } catch (e) {
        if (this.isDebug) console.log(`[ERROR]transactional.sendSmartEmail:  ${e}`)
        return Promise.reject(e)
      }
    }
}

export default CampaignMonitorClient
module.exports = CampaignMonitorClient

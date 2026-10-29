const sections = [
  ['Information Side-B Accesses', [
    'Side-B requires Photos permission to identify screenshots in your Apple Photos library and provide its core features. Depending on the permission you choose in iOS, Side-B may receive access to your full Photos library or only selected photos. Side-B uses this access to identify screenshots, create and maintain a local index, analyze screenshot content on-device, generate descriptions and organizational information, group related screenshots, and surface saved screenshots back to you. Side-B does not create or upload a separate copy of your screenshot library to Side-B-operated servers.',
    'To remember which screenshots have been processed and organized, Side-B may store local information such as an Apple Photos asset identifier or reference, an AI-generated description, an AI-generated category or collection assignment, your manually selected collection, whether you chose automatic or manual organization, and information used for the daily rediscovery feature. This information is stored locally on your device.'
  ]],
  ['How Screenshot Images Are Processed', [
    'When Side-B needs to analyze a screenshot, the App temporarily accesses the image through Apple’s Photos framework. The screenshot is processed on-device using Apple’s Foundation Models framework so the model can understand the screenshot and generate information such as a description or suggested collection. Side-B does not upload screenshot images to a Side-B server for AI analysis and does not retain a separate permanent copy of the screenshot image after processing. Side-B stores only the resulting local index and organizational information needed to provide its features.'
  ]],
  ['Artificial Intelligence Features', [
    'Side-B uses Apple’s Foundation Models framework for AI-assisted screenshot organization. AI may be used to understand the general content of a screenshot, generate a short description, identify similarities between screenshots, suggest an appropriate collection, automatically group related screenshots, and recognize whether a screenshot may belong to a collection you created. Processing is performed using Apple’s on-device Foundation Model. Side-B does not use your screenshots to train Side-B’s own artificial intelligence model and does not use screenshot content to train advertising systems or create advertising profiles.',
    'For each collection, you may choose automatic organization, which allows Side-B to use on-device AI to recognize relevant screenshots, or manual organization, where you add screenshots yourself without automatic AI classification for that collection.'
  ]],
  ['Daily Screenshot Rediscovery', [
    'Side-B may show you one randomly selected screenshot each day so you can rediscover something you previously saved. To provide this feature, Side-B may use the locally stored screenshot index and organizational information to choose an eligible screenshot from your library. The screenshot remains in your Photos library and is not uploaded by Side-B to provide this feature.'
  ]],
  ['Photo Library Permission', [
    'Side-B cannot access your Photos library unless you grant permission through iOS. Apple controls the permission interface and may allow you to provide access to all photos, access only to selected photos, or no access. You can change or revoke Side-B’s Photos permission at any time in iOS Settings. If you revoke access, some or all screenshot-related features may no longer function because Side-B can no longer retrieve unauthorized screenshot assets.'
  ]],
  ['Information Stored by Side-B', [
    'Side-B may store the following information locally on your device: screenshot asset references or identifiers; AI-generated screenshot descriptions; organizational categories; collection names; collection membership; automatic-organization preferences; manual organization choices; information related to the daily screenshot feature; and App settings and preferences. This information exists only to provide Side-B’s functionality. Side-B does not intentionally store a separate permanent copy of the original screenshot image.'
  ]],
  ['Data Sharing', [
    'Side-B does not sell your screenshot information. Side-B does not share screenshot content with advertisers, does not use screenshot content for cross-app tracking, and does not disclose screenshot content to third-party AI providers when Apple’s on-device Foundation Model is being used. Screenshot processing performed through Apple frameworks is also subject to the privacy and security protections provided by Apple and your operating system.'
  ]],
  ['Advertising and Tracking', [
    'Side-B does not use your screenshots for targeted advertising, does not create advertising profiles based on screenshot contents, and does not use screenshot content to track you across apps or websites owned by other companies.'
  ]],
  ['Data Retention', [
    'Side-B retains locally generated screenshot indexes, descriptions, collection information, and related App data for as long as needed to provide the App’s functionality or until that information is removed from the App. If a screenshot is deleted from your Photos library, Side-B may remove or update the corresponding local index when the App next synchronizes with your library. Deleting Side-B from your device removes data stored within the App, subject to any backup functionality provided by your device or Apple account. Revoking Photos permission prevents Side-B from continuing to access photo assets that are no longer authorized.'
  ]],
  ['Your Choices and Controls', [
    'You control how Side-B interacts with your screenshots. You may grant or refuse Photos access, limit Side-B to selected photos where supported by iOS, revoke Photos access through iOS Settings, create your own collections, manually organize screenshots, choose whether a collection should use automatic AI recognition, change your organizational preferences, and delete the App if you no longer wish to use Side-B.'
  ]],
  ['Security', [
    'Because screenshots may contain personal information, Side-B is designed to minimize external transmission of screenshot content. Screenshot analysis using Apple’s Foundation Model occurs on your device, and Side-B stores only the information needed to provide its organizational features rather than maintaining a separate cloud library of your screenshot images. No software or storage system can guarantee absolute security, so you should continue to use the security protections available on your Apple device, including device authentication and operating-system updates.'
  ]],
  ['Children’s Privacy', [
    'Side-B is not intended to knowingly collect personal information from children in violation of applicable law. Because Side-B primarily processes information locally on the user’s device, Side-B does not intentionally create external profiles based on screenshot content. If Side-B becomes aware that information has been handled in a way that does not comply with applicable children’s privacy requirements, appropriate steps will be taken to address it.'
  ]],
  ['Changes to This Privacy Policy', [
    'We may update this Privacy Policy as Side-B evolves. If an update materially changes how screenshot information or personal information is processed, we will update this Privacy Policy and, where appropriate, provide notice within the App. The “Last Updated” date at the top of this policy indicates when the policy was most recently revised.'
  ]],
  ['Contact', [
    'If you have questions about this Privacy Policy or Side-B’s privacy practices, contact us at:'
  ]]
];

export default function PrivacyPage() {
  return <main id="main" className="privacy-page">
    <section className="legal-header" aria-labelledby="privacy-title">
      <p className="eyebrow">LEGAL / PRIVACY</p>
      <h1 id="privacy-title">Privacy Policy</h1>
      <p className="legal-intro">How Side-B accesses, analyzes, organizes, and protects your screenshots.</p>
      <span className="last-updated">LAST UPDATED: 29th of October 2026</span>
    </section>
    <div className="legal-content">
      {sections.map(([title, paragraphs], index) => <section className="legal-card" key={title} aria-labelledby={`policy-section-${index + 1}`}>
        <div className="legal-heading"><span>{String(index + 1).padStart(2, '0')}</span><h2 id={`policy-section-${index + 1}`}>{title}</h2></div>
        <div className="legal-body">{paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {title === 'Contact' && <p>Side-B<br />Email: <a href="mailto:agnatsalist@gmail.com">agnatsalist@gmail.com</a><br />Country: Indonesia</p>}
        </div>
      </section>)}
      <aside className="privacy-summary" aria-labelledby="summary-title"><h2 id="summary-title">Your screenshots should remain yours.</h2><p>Side-B accesses screenshots only after you grant Photos permission. Screenshot content is analyzed on your device using Apple’s Foundation Models framework. Side-B keeps a local index and organizational information needed to provide its features rather than uploading and maintaining a separate copy of your screenshot library. You remain in control of Photos access and whether AI-assisted organization is used for your collections.</p></aside>
    </div>
  </main>;
}

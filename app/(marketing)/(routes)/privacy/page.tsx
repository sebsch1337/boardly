const Privacy = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-2xl font-bold mb-4">Privacy Policy for Boardly</h1>
			<p>
				<strong>Effective Date: 2023-12-22</strong>
			</p>

			<section className="mt-6">
				<h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
				<p className="mb-2">
					<strong>a. Data You Provide</strong>: We collect the texts and images you enter and upload into the Boardly app.
				</p>
				<p className="mb-2">
					<strong>b. Login Information</strong>: For user authentication, we use Clerk as a login provider. Your login credentials
					are managed through Clerk.
				</p>
				<p className="mb-2">
					<strong>c. Usage Data</strong>: We collect data about your interactions with our app on servers in Germany and Austria,
					hostet by netcup GmbH.
				</p>
			</section>

			<section className="mt-6">
				<h2 className="text-xl font-semibold mb-2">2. Use of Information</h2>
				<p>
					The data collected is solely for the purpose of providing you with the services of Boardly. We do not use your data for
					any other purposes, such as marketing or data mining.
				</p>
			</section>

			<section className="mt-6">
				<h2 className="text-xl font-semibold mb-2">3. Sharing of Information</h2>
				<p className="mb-2">
					<strong>a. Third-Party Service Providers</strong>: We use third-party services, including Clerk for user authentication
					and Stripe for payment, which are necessary to operate our app.
				</p>
				<p>
					<strong>b. Legal Requirements</strong>: We may disclose your information if required by law or if we believe in good
					faith that such action is necessary to comply with legal processes, to protect our rights or the safety of our users or
					the public.
				</p>
			</section>

			<section className="mt-6">
				<h2 className="text-xl font-semibold mb-2">4. User Rights</h2>
				<p>
					You have the right to access, rectify, and delete your data. For any privacy-related concerns or to exercise these
					rights, please contact us at{" "}
					<a
						href="mailto:boardly-privacy@scherbes.de"
						className="text-blue-600 underline"
					>
						boardly-privacy@scherbes.de
					</a>
					.
				</p>
			</section>

			<section className="mt-6">
				<h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
				<p>
					We rely on the security measures provided by Clerk and Stripe to protect your data stored on their servers. However,
					please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
				</p>
			</section>

			<section className="mt-6">
				<h2 className="text-xl font-semibold mb-2">6. International Data Transfers</h2>
				<p>Our hosting platform, Vercel, uses CDNs and implements measures to protect data during international transfers.</p>
			</section>

			<section className="mt-6">
				<h2 className="text-xl font-semibold mb-2">7. Children’s Privacy</h2>
				<p>Boardly does not specifically target or collect information from children. We do not verify the age of our users.</p>
			</section>

			<section className="mt-6">
				<h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
				<p>We may update this privacy policy from time to time. Users will be notified of any changes via email.</p>
			</section>

			<section className="mt-6">
				<h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
				<p>
					If you have any questions or concerns about this privacy policy, please contact us at{" "}
					<a
						href="mailto:boardly-privacy@scherbes.de"
						className="text-blue-600 underline"
					>
						boardly-privacy@scherbes.de
					</a>
					.
				</p>
			</section>
		</div>
	);
};

export default Privacy;

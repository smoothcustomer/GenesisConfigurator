<div class="panel-content summary">
	<div class="column info">
		<div class="row">

			<!-- Vehicle Info -->
			<div class="vehicle-info">
				<div class="model-trim">
					<div class="model">2020 G70</div>
					<div class="trim">2.0T 6-Speed Manual RWD</div>
				</div>
				<div class="specs">
					<div class="labels">
						<div class="label msrp">Starting<br>MSRP</div>
						<div class="label mpg">MPG<br>City/Hwy</div>
						<div class="label hp">HP</div>
					</div>
					<div class="values">
						<div class="value msrp">$45,250</div>
						<div class="value mpg">25/32</div>
						<div class="value hp">255</div>
					</div>
				</div>
			</div>

			<!-- Cost Detail -->
			<?php include 'components/cost-detail/cost-detail.php'; ?>

			<!-- Separator Line -->
			<div class="separator-line"></div>

			<!-- Payment Calculator -->
			<?php include 'components/payment-calculator/payment-calculator.php'; ?>

			<!-- Separator Line -->
			<div class="separator-line"></div>

			<!-- Local Inventory -->
			<?php include 'components/local-inventory/local-inventory.php'; ?>

			<!-- Separator Line -->
			<div class="separator-line"></div>

			<!-- Local Retailers -->
			<?php include 'components/local-retailers/local-retailers.php'; ?>

		</div>
	</div>

	<!-- Contact Form -->
	<div class="column contact">
		<?php include 'components/contact-form/contact-form.php'; ?>
	</div>

</div>

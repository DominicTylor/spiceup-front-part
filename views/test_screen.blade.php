@extends('layouts.screen')
@section('headJS')
	<script>
		window.screen = {
			public_id: '{{$screen->public_id}}'
		};
		window.state = {
			goals: {
				home: {{$game->score_home}},
				away: {{$game->score_away}},
			},
			teams: {
				home: {
					fullName: 'Juventus',
					shortName: '{{$game->teamHome->shortTitle}}',
					colors: {
						first: '{{$game->teamHome->color1}}',
						second: '{{$game->teamHome->color2}}',
					},
					players: {!!$game->teamHome->getPlayersJson()!!},
				},
				away: {
					fullName: 'Liverpool',
					shortName: '{{$game->teamAway->shortTitle}}',
					colors: {
						first: '{{$game->teamAway->color1}}',
						second: '{{$game->teamAway->color2}}',
					},
					players: {!!$game->teamAway->getPlayersJson()!!},
				},
			},
			timer: {
				startTime: {!!$widgets['Timer']->getStateData('startTime')!!},
				endTime: {!!$widgets['Timer']->getStateData('endTime')!!},
				status: "{!!$widgets['Timer']->getStateData('status')!!}"
			}
		};
	</script>
@endsection
@section('headCSS')
	@if($withBg==1)
		<style>
			body {
				background-image: url('http://fcdb.ru/wp-content/uploads/2015/08/rn4gKCatwnY.jpg');
				background-position: top center;
				background-size: cover;
				background-repeat: no-repeat;
			}
		</style>
	@endif
@endsection
@section('content')
	<head-panel></head-panel>
	<substitution></substitution>
	<teams></teams>
@endsection

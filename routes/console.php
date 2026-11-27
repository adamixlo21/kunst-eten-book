<?php

use Illuminate\Support\Facades\Schedule;

Schedule::command('refunds:sync')
    ->everyFiveMinutes()
    ->withoutOverlapping(10);

Schedule::command('refunds:send-confirmations')
    ->everyMinute()
    ->withoutOverlapping(10);
